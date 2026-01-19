'use client';

import { useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Total frames in the sequence based on the user's provided files (approx 200 based on file list)
// We will assume 200 for now, but good to be dynamic if possible. 
// The file list showed frame-200.jpg, so 200 is the count.
const FRAME_COUNT = 200;

export default function StaffingScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Map scroll progress 0..1 to frame index 0..FRAME_COUNT-1
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        const loadImages = async () => {
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                // Pad with zeros (e.g. 1 -> "001")
                const formattedIndex = i.toString().padStart(3, '0');
                // Actual files are frame-001.jpg etc.
                img.src = `/frames/frame-${formattedIndex}.jpg`;

                await new Promise((resolve, reject) => {
                    img.onload = () => {
                        loadedCount++;
                        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                        resolve(true);
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        // Resolve anyway to continue
                        resolve(true);
                    };
                });
                imgArray[i - 1] = img;
            }
            setImages(imgArray);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    // Render to canvas
    useMotionValueEvent(frameIndex, 'change', (latest) => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Use Math.floor to get integer index, clamp between 0 and total-1
        const index = Math.min(
            Math.max(Math.floor(latest) - 1, 0),
            images.length - 1
        );

        const img = images[index];
        if (!img) return;

        // Canvas sizing logic (contain)
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // Standard aspect ratio fitting (contain)
        const scale = Math.min(cw / iw, ch / ih);
        const w = iw * scale;
        const h = ih * scale;
        const x = (cw - w) / 2;
        const y = (ch - h) / 2;

        requestAnimationFrame(() => {
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, x, y, w, h);
        });
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Force a redraw of the current frame if needed, 
                // but the scroll listener will pick it up on next scroll or we could trigger it.
                // For now rely on scroll or initial render.
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Text Opacity Transforms
    // 0% -> 20%: First text
    // 30% -> 50%: Second text
    // 60% -> 80%: Third text
    // 90% -> 100%: Fourth text
    // Text Opacity Transforms - Maximized visibility
    // 0% -> 30%: First text (Stays longer)
    // 35% -> 60%: Second text (Stays longer)
    // 65% -> 90%: Third text (Stays longer)
    // 90% -> 100%: Fourth text (Final)
    const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.55, 0.7], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0, 1, 0]);
    // The final text needs to stay visible properly at the end
    const opacity4 = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);

    // Initial draw when loading finishes
    useEffect(() => {
        if (!isLoading && images.length > 0 && canvasRef.current) {
            // Find the image for current scroll pos (likely 0) or standard 0
            const ctx = canvasRef.current.getContext('2d');
            const img = images[0];
            if (ctx && img) {
                const cw = canvasRef.current.width;
                const ch = canvasRef.current.height;
                const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
                const w = img.naturalWidth * scale;
                const h = img.naturalHeight * scale;
                const x = (cw - w) / 2;
                const y = (ch - h) / 2;
                ctx.clearRect(0, 0, cw, ch);
                ctx.drawImage(img, x, y, w, h);
            }
        }
    }, [isLoading, images]);

    // Timeout Failsafe
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                console.warn('Loading timeout reached, forcing display.');
                setIsLoading(false);
            }
        }, 8000); // 8 seconds max wait
        return () => clearTimeout(timer);
    }, [isLoading]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-black">
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
                    <div className="text-2xl font-light tracking-widest">LOADING ASSETS</div>
                    <div className="mt-4 h-[2px] w-64 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${loadProgress}%` }}
                        />
                    </div>
                    <div className="mt-2 text-sm text-gray-400 font-mono">{loadProgress}%</div>
                </div>
            )}

            <canvas
                ref={canvasRef}
                className="sticky top-0 h-screen w-full object-contain"
            />

            {/* Overlays Wrapper */}
            <div className="sticky top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-center items-center px-8 mix-blend-difference text-white">

                {/* Text 1: Centered */}
                <motion.div style={{ opacity: opacity1 }} className="absolute text-center">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter">One Vision.<br />Limited Hands?</h1>
                </motion.div>

                {/* Text 2: Left Aligned */}
                <motion.div style={{ opacity: opacity2 }} className="absolute w-full px-12 md:px-24 flex justify-start">
                    <h2 className="text-3xl md:text-6xl font-medium tracking-tight">Instant Deployment.</h2>
                </motion.div>

                {/* Text 3: Right Aligned */}
                <motion.div style={{ opacity: opacity3 }} className="absolute w-full px-12 md:px-24 flex justify-end">
                    <h2 className="text-3xl md:text-6xl font-medium tracking-tight text-right">Global Talent Pool.</h2>
                </motion.div>

                {/* Text 4: Centered */}
                <motion.div style={{ opacity: opacity4 }} className="absolute text-center">
                    <h2 className="text-4xl md:text-8xl font-black uppercase tracking-widest">Your Project.<br />Delivered.</h2>
                </motion.div>

            </div>
        </div>
    );
}
