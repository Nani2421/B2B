export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen bg-black text-white selection:bg-white selection:text-black py-32 px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-16">
                    Our Vision.
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-16">
                    Struggling to find the right talent? We&apos;ve got you covered. Our
                    global network of elite professionals is ready to jump in and
                    accelerate your project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg md:text-xl font-light leading-relaxed text-gray-300">
                    <div>
                        <p className="mb-8">
                            We don&apos;t just build software; we engineer success. Our approach is rooted in a deep understanding of
                            modern technology and business needs. Our mission is to bridge that gap using advanced AI-driven matching and a relentless
                            pursuit of excellence.
                        </p>
                        <p>
                            In a world where speed defines success, we provide the kinetic energy to move your
                            projects forward. We don&apos;t just fill seats; we augment your capability.
                        </p>
                    </div>
                    <div>
                        <p className="mb-8">
                            Our network spans 45 countries and includes the top 1% of creative and technical
                            talent. From rapid prototyping to enterprise-scale deployment, we scale as you scale.
                        </p>
                        <h3 className="text-white font-medium text-2xl mt-12 mb-4">Values</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Speed over bureaucracy.</li>
                            <li>Quality as a non-negotiable.</li>
                            <li>Transparency in every interaction.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
