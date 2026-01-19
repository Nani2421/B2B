'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';

const links = [
    { href: '#about', label: 'About' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {

    const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference text-white">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-2xl font-bold tracking-tighter"
            >
                AGENCY
            </a>

            <ul className="flex gap-8 items-center">
                {links.map((link) => (
                    <li key={link.href} className="relative">
                        <a
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
