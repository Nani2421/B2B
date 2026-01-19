const team = [
    { name: 'Sarah Jenkins', role: 'Founder & CEO', bio: 'Visionary leader with 15+ years in global staffing.' },
    { name: 'David Chen', role: 'CTO', bio: 'Architecting the future of automated talent matching.' },
    { name: 'Elena Rodriguez', role: 'Head of Talent', bio: 'Curating the world’s most exclusive developer network.' },
    { name: 'Marcus Tho', role: 'Director of Partnerships', bio: 'Connecting enterprise needs with agile solutions.' },
];

export default function TeamSection() {
    return (
        <section id="team" className="min-h-screen bg-black text-white selection:bg-white selection:text-black py-32 px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-16">
                    The Squad.
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="group border border-gray-800 p-8 hover:bg-gray-900 transition-colors">
                            <div className="aspect-square bg-gray-800 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                                {/* Placeholder for team image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs uppercase tracking-widest">
                                    [Image: {member.name}]
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-32 border-t border-gray-800 pt-16">
                    <h2 className="text-4xl font-bold mb-8">Join the network</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mb-8">
                        Are you in the top 1% of your field? We are always looking for exceptional talent
                        to join our exclusive roster.
                    </p>
                    <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                        Apply for Representation
                    </button>
                </div>
            </div>
        </section>
    );
}
