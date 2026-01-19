'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

const StaffingScroll = dynamic(() => import('@/components/StaffingScroll'), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-black text-white flex items-center justify-center">Loading Experience...</div>
});

const Footer = () => (
  <footer className="bg-black text-white py-24 px-6 md:px-24 border-t border-gray-900">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h2 className="text-4xl font-bold tracking-tighter mb-4">AGENCY</h2>
        <p className="text-gray-500 max-w-sm">
          Redefining the speed of talent deployment for the automated age.
        </p>
      </div>
      <div className="mt-12 md:mt-0 flex gap-8 text-sm uppercase tracking-widest text-gray-500">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-24 text-xs text-gray-700 uppercase tracking-widest flex justify-between">
      <span>© 2026 Agency Inc.</span>
      <span>All System Normal</span>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <StaffingScroll />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
