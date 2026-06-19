import { useState, useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import ProfilePictureComponent from './components/ProfilePictureComponent';
import PillButtonComponent from './components/PillButtonComponent';
import ProjectCardComponent from './components/ProjectCardComponent';
import ScrollReveal from './components/ScrollReveal';

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTerminal,
    FaDatabase,
    FaMicrochip
} from 'react-icons/fa';

// Import local assets so Vite processes them correctly for production
import ProfileImage from './assets/ProfileImage.jpg';
import SecondProfile from './assets/SecondProfile.jpg';
import SertifHTML from './assets/SertifHTML.png';
import SertifJS from './assets/SertifJS.png';
import SertifTimedoor from './assets/SertifTimedoor.jpeg';
import XenoAether from './assets/XenoAether.png';
import PlatziFakeStore from './assets/PlatziFakeStore.png';
import YugiMarket from './assets/YugiMarket.png';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');

    const certificatesList = [
        {
            title: "HTML completion course from Dicoding",
            description: "Completing basic HTML crash course.",
            image: SertifHTML,
            link: "#"
        },
        {
            title: "JavaScript from Dicoding",
            description: "Completing JavaScript crash course",
            image: SertifJS,
            link: "#"
        },
        {
            title: "Coding class from Timedoor",
            description: "Completing coding class from Timedoor",
            image: SertifTimedoor,
            link: "#"
        }
    ];

    const projectsList = [
        {
            title: "XenoAether",
            description: "An online game shop platform where it'll find the best deals instantly, automatically",
            image: XenoAether,
            link: "https://felix708.github.io/XenoAether/"
        },
        {
            title: "Platzi Fake Store",
            description: "A fake E-Commerce web using a public API.",
            image: PlatziFakeStore,
            link: "https://felix708.github.io/FakeStore-ReactJS/"
        },
        {
            title: "Yugi Market",
            description: "A Mock E-Commerce website using an API made by myself and Frontend using ReactJS.",
            image: YugiMarket,
            link: "#"
        }
    ];

    const coreSkills = [
        { name: "React.js", bar: "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□□", percent: "80%" },
        { name: "JavaScript", bar: "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□□", percent: "80%" },
        { name: "Flutter", bar: "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□□□□□□", percent: "60%" },
        { name: "Express.js", bar: "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□", percent: "70%" },
        { name: "Laravel Framework", bar: "■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□", percent: "70%" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // All sections available in our navigation
            const sections = ['home', 'about', 'certificates', 'skills', 'projects', 'contact'];
            const scrollOffset = window.scrollY + 220; // Nav height offset + buffer

            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    // If window is within the bounds of this section
                    if (scrollOffset >= top && scrollOffset < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-ef-bg text-ef-text relative tech-grid-bg">

            <div className="absolute top-0 left-1/4 h-full bg-white/2 pointer-events-none" />
            <div className="absolute top-0 right-1/4 h-full bg-white/2 pointer-events-none" />

            <NavbarComponent
                scrollToSection={scrollToSection}
                activeSection={activeSection}
            />

            <section id="home" className="section-spacing relative overflow-hidden pt-28">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center">

                    <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
                        <ScrollReveal direction="up" delay={100}>
                            <span className="font-mono text-lg text-ef-accent  uppercase font-bold">
                                STATUS: ONLINE, WELCOME BACK...
                            </span>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={250}>
                            <h1 className="font-mono text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 uppercase">
                                SAMUEL FELIX <span className="text-ef-accent font-light">//</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={400}>
                            <p className="text-sm md:text-base text-ef-muted leading-relaxed max-w-xl mb-8 font-sans">
                                Teenage student in a vocational school with extreme otaku habits in a digital world, trying to live his life to become the absolute MC.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={550}>
                            <PillButtonComponent
                                text="See More"
                                onClick={() => scrollToSection('about')}
                            />
                        </ScrollReveal>
                    </div>

                    <div className="lg:col-span-5 flex justify-center lg:justify-end items-center z-10">
                        <ScrollReveal direction="down" delay={300}>
                            <ProfilePictureComponent
                                imageUrl={ProfileImage}
                                sizeClass="w-70 h-70 md:w-90 md:h-90"
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section id="about" className="section-spacing border-t border-white/5 bg-ef-card/10">
                <div className="max-w-7xl mx-auto w-full">

                    <ScrollReveal direction="up" delay={100}>
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="font-mono text-xl md:text-2xl font-bold  text-white uppercase">
                                02 // ABOUT USER
                            </h2>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Profile Column */}
                        <div className="lg:col-span-4 flex justify-center items-center">
                            <ScrollReveal direction="up" delay={200}>
                                <ProfilePictureComponent
                                    imageUrl={SecondProfile}
                                    sizeClass="w-48 h-48 md:w-80 md:h-80"
                                />
                            </ScrollReveal>
                        </div>

                        {/* Right About Column */}
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <ScrollReveal direction="up" delay={300}>
                                <div className="bg-ef-card/40 border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                    {/* Tech details watermark corner */}
                                    <div className="absolute top-4 right-4 font-mono text-[11px] text-ef-muted select-none">
                                        ACCESS.FILE.REF // 88A4-SYS
                                    </div>

                                    <h3 className="font-mono text-1xl font-semibold text-ef-accent mb-4 uppercase">
                                        [ OP_SPECIFICATION_RECORD ]
                                    </h3>

                                    {/* System profile logs */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs mb-6 border-b border-white/5 pb-6">
                                        <div>
                                            <span className="text-ef-muted block text-[15px] uppercase">Codename</span>
                                            <span className="text-white text-[17px] font-semibold">SAMUEL_FELIX</span>
                                        </div>
                                        <div>
                                            <span className="text-ef-muted block text-[15px] uppercase">Specialty</span>
                                            <span className="text-white text-[17px] font-semibold">Mostly_Backend</span>
                                        </div>
                                        <div>
                                            <span className="text-ef-muted block text-[15px] uppercase">Deployment</span>
                                            <span className="text-white text-[17px] font-semibold">Active // Stable</span>
                                        </div>
                                        <div>
                                            <span className="text-ef-muted block text-[15px] uppercase">Clearance</span>
                                            <span className="text-ef-accent text-[17px] font-semibold">LEVEL_04</span>
                                        </div>
                                    </div>

                                    {/* Bio description text */}
                                    <p className="text-m text-ef-muted leading-relaxed font-sans mb-4">
                                        My full name is Samuel Felix Simanjuntak and i have been into the developer world since i was little. I have been intrested in how people make applications and websites and such.
                                    </p>
                                    <p className="text-m text-ef-muted leading-relaxed font-sans">
                                        Although i do start since i was little, i was still pursuing my dream of getting a good career lane from my ability in this internet world. :)
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <section id="certificates" className="section-spacing border-t border-white/5">
                <div className="max-w-7xl mx-auto w-full">

                    <ScrollReveal direction="up" delay={100}>
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="font-mono text-xl md:text-2xl font-bold  text-white uppercase">
                                03 // CERTIFICATES
                            </h2>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificatesList.map((cert, index) => (
                            <ScrollReveal key={index} direction="up" delay={150 * (index + 1)}>
                                <ProjectCardComponent
                                    title={cert.title}
                                    description={cert.description}
                                    image={cert.image}
                                    link={cert.link}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="section-spacing border-t border-white/5 bg-ef-card/10">
                <div className="max-w-7xl mx-auto w-full">

                    <ScrollReveal direction="up" delay={100}>
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="font-mono text-xl md:text-2xl font-bold  text-white uppercase">
                                04 // CORE CAPABILITIES
                            </h2>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left Side: Summary text */}
                        <div className="lg:col-span-5 flex flex-col justify-center items-start">
                            <ScrollReveal direction="up" delay={200}>
                                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-ef-accent bg-ef-accent/10 border border-ef-accent/20 px-3 py-1 rounded">
                                    <FaTerminal className="text-xs" />
                                    <span>SYSTEM_STATUS // DIAGNOSTICS READY</span>
                                </div>
                                <h3 className="font-mono text-lg font-bold text-white mb-4 uppercase">
                                    Tactical Systems Skillset
                                </h3>
                                <p className="text-sm text-ef-muted leading-relaxed font-sans mb-6">
                                    My journey on exploring and getting to know more about programming hasn't stopped yet. and this is what i've learnt over these past years of my life...
                                </p>

                                {/* Technical decorative indicators */}
                                <div className="flex gap-4 font-mono text-[10px] text-ef-muted">
                                    <span className="flex items-center gap-1"><FaTerminal /> STATUS: DEPLOYED</span>
                                    <span className="flex items-center gap-1"><FaMicrochip /> MEMORY: COMPACT</span>
                                    <span className="flex items-center gap-1"><FaDatabase /> LOGIC: CLEAN</span>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Side: High-tech skill indicators */}
                        <div className="lg:col-span-7 flex flex-col gap-5 justify-center">
                            {coreSkills.map((skill, index) => (
                                <ScrollReveal key={index} direction="left" delay={100 * (index + 1)}>
                                    <div className="bg-ef-card/30 border border-white/5 hover:border-ef-accent/30 p-4 rounded-xl transition-all duration-300">
                                        <div className="flex justify-between items-center font-mono text-xs mb-2">
                                            <span className="text-white font-semibold flex items-center gap-2">
                                                <span className="text-ef-accent">0{index + 1} /</span> {skill.name}
                                            </span>
                                            <span className="text-ef-accent font-bold font-mono">
                                                {skill.percent}
                                            </span>
                                        </div>
                                        {/* Stylized Progress Bar representing technical blocks */}
                                        <div className="flex items-center justify-between font-mono text-[11px] text-ef-accent  select-none">
                                            <span className="text-ef-accent/80 font-bold">{skill.bar}</span>
                                            <span className="text-[9px] text-ef-muted font-semibold">STABLE</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section-spacing border-t border-white/5">
                <div className="max-w-7xl mx-auto w-full">

                    <ScrollReveal direction="up" delay={100}>
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="font-mono text-xl md:text-2xl font-bold  text-white uppercase">
                                05 // PROJECTS
                            </h2>
                            <div className="flex-1 h-1px bg-white/10" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectsList.map((project, index) => (
                            <ScrollReveal key={index} direction="up" delay={150 * (index + 1)}>
                                <ProjectCardComponent
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    link={project.link}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="section-spacing border-t border-white/5 bg-ef-card/10 relative overflow-hidden">

                <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-white/5 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-white/5 pointer-events-none" />

                <div className="max-w-4xl mx-auto w-full text-center z-10">
                    <ScrollReveal direction="up" delay={100}>
                        <div className="flex justify-center mb-6">
                            <span className="font-mono text-xs text-ef-accent bg-ef-accent/10 border border-ef-accent/20 px-3.5 py-1 rounded ">
                                SECURE_COMMS // CH-09
                            </span>
                        </div>
                        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
                            GET IN TOUCH AND CONNECT TOGETHER!
                        </h2>
                        <p className="text-s text-ef-muted max-w-lg mx-auto mb-12 font-sans leading-relaxed">
                            Im a little lonely and would really appreciate if someone wants to be my friend! so feel free to contact me through my social media or if you want to do a project together!
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={300}>
                        <div className="flex justify-center items-center gap-8 md:gap-12 mb-16">

                            <a
                                href="https://github.com/Felix708"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-2 cursor-pointer"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-ef-card/30 flex items-center justify-center text-ef-muted transition-all duration-300 ease-out group-hover:scale-115 group-hover:text-ef-accent group-hover:border-ef-accent group-hover:shadow-[0_0_15px_rgba(93,169,236,0.3)]">
                                    <FaGithub className="text-xl md:text-2xl" />
                                </div>
                                <span className="font-mono text-[9px] text-ef-muted  opacity-0 group-hover:opacity-100 transition-opacity duration-300">GITHUB</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/samuel-felix-358597404/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-2 cursor-pointer"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-ef-card/30 flex items-center justify-center text-ef-muted transition-all duration-300 ease-out group-hover:scale-115 group-hover:text-ef-accent group-hover:border-ef-accent group-hover:shadow-[0_0_15px_rgba(93,169,236,0.3)]">
                                    <FaLinkedin className="text-xl md:text-2xl" />
                                </div>
                                <span className="font-mono text-[9px] text-ef-muted  opacity-0 group-hover:opacity-100 transition-opacity duration-300">LINKEDIN</span>
                            </a>

                            <a
                                href="https://www.instagram.com/felixetc_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-2 cursor-pointer"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-ef-card/30 flex items-center justify-center text-ef-muted transition-all duration-300 ease-out group-hover:scale-115 group-hover:text-ef-accent group-hover:border-ef-accent group-hover:shadow-[0_0_15px_rgba(93,169,236,0.3)]">
                                    <FaInstagram className="text-xl md:text-2xl" />
                                </div>
                                <span className="font-mono text-[9px] text-ef-muted  opacity-0 group-hover:opacity-100 transition-opacity duration-300">EMAIL</span>
                            </a>

                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={450}>
                        <div className="font-mono text-[9px] text-ef-muted  select-all">
                            OPERATOR_ID // FELIX-A8348 // ENDFIELD ARCHIVE
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <footer className="py-6 border-t border-white/5 bg-ef-bg text-center font-mono text-[13px] text-ef-muted">
                <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
                    <span>© 2026 // SAMUEL FELIX .S </span>
                    <span className="text-ef-accent/50 select-none font-semibold">// DESIGNED IN ALIGNMENT WITH ENDFIELD PROTOCOLS</span>
                </div>
            </footer>
        </div>
    );
}
