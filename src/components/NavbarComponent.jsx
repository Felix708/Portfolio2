import { useState } from 'react';

/**
 * NavbarComponent
 * 
 * Renders a futuristic, highly functional navigation header inspired by the Arknights Endfield website.
 * Features glassmorphism overlay, responsive mobile toggling, and visual active highlights.
 * 
 * Props:
 * - scrollToSection: Function to scroll smoothly to a given section ID (e.g., scrollToSection('about'))
 * - activeSection: String representing the active section currently in view (e.g., 'skills') to highlight the menu item
 */
export default function NavbarComponent({ scrollToSection, activeSection }) {
    // State to toggle the mobile technical menu panel
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // List of navigation items with their respective element IDs
    const navItems = [
        { label: 'HOME', id: 'home', number: '01' },
        { label: 'ABOUT', id: 'about', number: '02' },
        { label: 'CERTIFICATES', id: 'certificates', number: '03' },
        { label: 'SKILLS', id: 'skills', number: '04' },
        { label: 'PROJECTS', id: 'projects', number: '05' },
        { label: 'CONTACT', id: 'contact', number: '06' },
    ];

    // Helper function to handle link clicks, closing the mobile menu in the process
    const handleNavClick = (id) => {
        scrollToSection(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-ef-bg/85 backdrop-blur-md border-b border-white/5 select-none transition-all duration-300">
            <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* 1. Sleek Brand Logo / Portfolio Title */}
                <div
                    onClick={() => handleNavClick('home')}
                    className="cursor-pointer group flex items-center gap-1"
                >
                    <span className="font-mono text-xl text-ef-accent group-hover:text-white transition-colors duration-300 font-bold">
                        FELIX'S // ARCHIVE
                    </span>
                </div>

                {/* 2. Desktop Navigation Menu */}
                <ul className="hidden lg:flex items-center gap-8 font-mono   text-ef-muted">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`group flex items-center gap-1 cursor-pointer transition-colors duration-300 hover:text-white relative py-1 ${isActive ? 'text-ef-accent hud-glow font-bold' : ''
                                    }`}
                            >
                                <span className={`text-[9px] ${isActive ? 'text-ef-accent' : 'text-ef-accent/40 group-hover:text-ef-accent/90'} transition-colors`}>
                                    {item.number}
                                </span>
                                <span>{item.label}</span>

                                {/* Bottom active indicator line */}
                                <div className={`absolute bottom-0 left-0 h-[1.5px] bg-ef-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </li>
                        );
                    })}
                </ul>

                {/* 3. Mobile Hamburger Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-ef-accent hover:text-white focus:outline-none cursor-pointer flex flex-col gap-1.5 p-2 rounded border border-white/5 bg-white/5 active:scale-95 transition-transform"
                    aria-label="Toggle menu"
                >
                    <span className={`w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`w-5 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-5 h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>

            {/* 4. Mobile Dropdown Technical Panel */}
            <div className={`lg:hidden w-full overflow-hidden transition-all duration-300 ease-in-out border-b border-white/5 bg-ef-bg/95 backdrop-blur-lg ${isMobileMenuOpen ? 'max-h-80 border-t' : 'max-h-0'
                }`}>
                <ul className="px-6 py-4 flex flex-col gap-4 font-mono text-xs">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`flex items-center gap-3 py-2 cursor-pointer border-b border-white/5 last:border-0 hover:text-ef-accent transition-colors ${isActive ? 'text-ef-accent font-bold pl-2 border-l-2 border-l-ef-accent border-b-0 bg-ef-accent/5' : 'text-ef-muted'
                                    }`}
                            >
                                <span className="text-[10px] text-ef-accent/40">{item.number} //</span>
                                <span className="tracking-wider">{item.label}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
