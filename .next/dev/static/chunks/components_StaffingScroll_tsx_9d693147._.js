(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/StaffingScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StaffingScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Total frames in the sequence based on the user's provided files (approx 200 based on file list)
// We will assume 200 for now, but good to be dynamic if possible. 
// The file list showed frame-200.jpg, so 200 is the count.
const FRAME_COUNT = 200;
function StaffingScroll() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadProgress, setLoadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            'start start',
            'end end'
        ]
    });
    // Map scroll progress 0..1 to frame index 0..FRAME_COUNT-1
    const frameIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1,
        FRAME_COUNT
    ]);
    // Preload images
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffingScroll.useEffect": ()=>{
            let loadedCount = 0;
            const imgArray = [];
            const loadImages = {
                "StaffingScroll.useEffect.loadImages": async ()=>{
                    for(let i = 1; i <= FRAME_COUNT; i++){
                        const img = new Image();
                        // Pad with zeros (e.g. 1 -> "001")
                        const formattedIndex = i.toString().padStart(3, '0');
                        // Actual files are frame-001.jpg etc.
                        img.src = `/frames/frame-${formattedIndex}.jpg`;
                        await new Promise({
                            "StaffingScroll.useEffect.loadImages": (resolve, reject)=>{
                                img.onload = ({
                                    "StaffingScroll.useEffect.loadImages": ()=>{
                                        loadedCount++;
                                        setLoadProgress(Math.round(loadedCount / FRAME_COUNT * 100));
                                        resolve(true);
                                    }
                                })["StaffingScroll.useEffect.loadImages"];
                                img.onerror = ({
                                    "StaffingScroll.useEffect.loadImages": ()=>{
                                        console.error(`Failed to load frame ${i}`);
                                        // Resolve anyway to continue
                                        resolve(true);
                                    }
                                })["StaffingScroll.useEffect.loadImages"];
                            }
                        }["StaffingScroll.useEffect.loadImages"]);
                        imgArray[i - 1] = img;
                    }
                    setImages(imgArray);
                    setIsLoading(false);
                }
            }["StaffingScroll.useEffect.loadImages"];
            loadImages();
        }
    }["StaffingScroll.useEffect"], []);
    // Render to canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(frameIndex, 'change', {
        "StaffingScroll.useMotionValueEvent": (latest)=>{
            if (!canvasRef.current || images.length === 0) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Use Math.floor to get integer index, clamp between 0 and total-1
            const index = Math.min(Math.max(Math.floor(latest) - 1, 0), images.length - 1);
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
            requestAnimationFrame({
                "StaffingScroll.useMotionValueEvent": ()=>{
                    ctx.clearRect(0, 0, cw, ch);
                    ctx.drawImage(img, x, y, w, h);
                }
            }["StaffingScroll.useMotionValueEvent"]);
        }
    }["StaffingScroll.useMotionValueEvent"]);
    // Handle Resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffingScroll.useEffect": ()=>{
            const handleResize = {
                "StaffingScroll.useEffect.handleResize": ()=>{
                    if (canvasRef.current) {
                        canvasRef.current.width = window.innerWidth;
                        canvasRef.current.height = window.innerHeight;
                    // Force a redraw of the current frame if needed, 
                    // but the scroll listener will pick it up on next scroll or we could trigger it.
                    // For now rely on scroll or initial render.
                    }
                }
            }["StaffingScroll.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            handleResize(); // Initial size
            return ({
                "StaffingScroll.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["StaffingScroll.useEffect"];
        }
    }["StaffingScroll.useEffect"], []);
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
    const opacity1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.25,
        0.35
    ], [
        1,
        1,
        0
    ]);
    const opacity2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.35,
        0.55,
        0.7
    ], [
        0,
        1,
        0
    ]);
    const opacity3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.7,
        0.85,
        0.95
    ], [
        0,
        1,
        0
    ]);
    // The final text needs to stay visible properly at the end
    const opacity4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0.9,
        0.95,
        1
    ], [
        0,
        1,
        1
    ]);
    // Initial draw when loading finishes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffingScroll.useEffect": ()=>{
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
        }
    }["StaffingScroll.useEffect"], [
        isLoading,
        images
    ]);
    // Timeout Failsafe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffingScroll.useEffect": ()=>{
            const timer = setTimeout({
                "StaffingScroll.useEffect.timer": ()=>{
                    if (isLoading) {
                        console.warn('Loading timeout reached, forcing display.');
                        setIsLoading(false);
                    }
                }
            }["StaffingScroll.useEffect.timer"], 8000); // 8 seconds max wait
            return ({
                "StaffingScroll.useEffect": ()=>clearTimeout(timer)
            })["StaffingScroll.useEffect"];
        }
    }["StaffingScroll.useEffect"], [
        isLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative h-[400vh] bg-black",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-light tracking-widest",
                        children: "LOADING ASSETS"
                    }, void 0, false, {
                        fileName: "[project]/components/StaffingScroll.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 h-[2px] w-64 bg-gray-800 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full bg-white",
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: `${loadProgress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/StaffingScroll.tsx",
                            lineNumber: 166,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/StaffingScroll.tsx",
                        lineNumber: 165,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm text-gray-400 font-mono",
                        children: [
                            loadProgress,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/StaffingScroll.tsx",
                        lineNumber: 172,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StaffingScroll.tsx",
                lineNumber: 163,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "sticky top-0 h-screen w-full object-contain"
            }, void 0, false, {
                fileName: "[project]/components/StaffingScroll.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-center items-center px-8 mix-blend-difference text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: opacity1
                        },
                        className: "absolute text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-7xl font-bold tracking-tighter",
                            children: [
                                "One Vision.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/StaffingScroll.tsx",
                                    lineNumber: 186,
                                    columnNumber: 96
                                }, this),
                                "Limited Hands?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StaffingScroll.tsx",
                            lineNumber: 186,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/StaffingScroll.tsx",
                        lineNumber: 185,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: opacity2
                        },
                        className: "absolute w-full px-12 md:px-24 flex justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-6xl font-medium tracking-tight",
                            children: "Instant Deployment."
                        }, void 0, false, {
                            fileName: "[project]/components/StaffingScroll.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/StaffingScroll.tsx",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: opacity3
                        },
                        className: "absolute w-full px-12 md:px-24 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-6xl font-medium tracking-tight text-right",
                            children: "Global Talent Pool."
                        }, void 0, false, {
                            fileName: "[project]/components/StaffingScroll.tsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/StaffingScroll.tsx",
                        lineNumber: 195,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            opacity: opacity4
                        },
                        className: "absolute text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-8xl font-black uppercase tracking-widest",
                            children: [
                                "Your Project.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/StaffingScroll.tsx",
                                    lineNumber: 201,
                                    columnNumber: 108
                                }, this),
                                "Delivered."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/StaffingScroll.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/StaffingScroll.tsx",
                        lineNumber: 200,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/StaffingScroll.tsx",
                lineNumber: 182,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/StaffingScroll.tsx",
        lineNumber: 161,
        columnNumber: 9
    }, this);
}
_s(StaffingScroll, "eQ+wTSliLIfKJIvk1hEmk0nrbLo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = StaffingScroll;
var _c;
__turbopack_context__.k.register(_c, "StaffingScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StaffingScroll.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/StaffingScroll.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_StaffingScroll_tsx_9d693147._.js.map