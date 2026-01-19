export default function ContactSection() {
    return (
        <section id="contact" className="min-h-screen bg-black text-white selection:bg-white selection:text-black py-32 px-6 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
                        Let&apos;s Talk
                    </h2>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">General Inquiries</h3>
                            <a href="mailto:hello@agency.com" className="text-2xl hover:text-gray-300 transition-colors">
                                hello@agency.com
                            </a>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Talent Acquisition</h3>
                            <a href="mailto:talent@agency.com" className="text-2xl hover:text-gray-300 transition-colors">
                                talent@agency.com
                            </a>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Office</h3>
                            <p className="text-xl text-gray-300">
                                1200 Future Way,<br />
                                Tech District, CA 94025<br />
                                United States
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900/50 p-12 border border-gray-800">
                    <form className="space-y-8">
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Name</label>
                            <input type="text" className="w-full bg-black border-b border-gray-700 p-4 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Email</label>
                            <input type="email" className="w-full bg-black border-b border-gray-700 p-4 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm uppercase tracking-widest text-gray-500 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-black border-b border-gray-700 p-4 text-white focus:outline-none focus:border-white transition-colors" placeholder="Tell us about your project..." />
                        </div>
                        <button type="submit" className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                            Send Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
