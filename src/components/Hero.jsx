import React, { useState } from "react";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="hero" className="min-h-[95vh] p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col justify-center space-y-8 relative overflow-hidden">
            {/* Background Glow/Starlight Effect */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-cyan-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-pulse z-0"></div>

            {/* Meteor Animation Drop */}
            <style>{`
                @keyframes meteorDrop {
                    0% { transform: translate(0, 0); opacity: 0; }
                    10% { opacity: 1; }
                    100% { transform: translate(-1500px, 1500px); opacity: 0; }
                }
            `}</style>

            <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            top: (Math.random() * -50) + '%',
                            left: (Math.random() * 200) + '%',
                            animation: 'meteorDrop ' + (Math.floor(Math.random() * 5) + 3) + 's linear infinite',
                            animationDelay: (Math.random() * 10) + 's'
                        }}
                    >
                        <div
                            className="relative shadow-[0_0_10px_2px_#00ffff]"
                            style={{
                                width: '2px',
                                height: '2px',
                                backgroundColor: '#00ffff',
                                borderRadius: '50%',
                                transform: 'rotate(-45deg)'
                            }}
                        >
                            <div
                                className="absolute"
                                style={{
                                    top: '50%',
                                    left: '100%',
                                    width: (Math.floor(Math.random() * 100) + 50) + 'px',
                                    height: '1px',
                                    background: 'linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(0,255,255,0) 100%)',
                                    transform: 'translateY(-50%)'
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="z-10">
                <span className="text-[#00ffff] font-bold">takrittin@portfolio:~$</span> /welcome
            </div>

            <pre className="text-gray-200 text-[clamp(6.5px,2vw,16px)] leading-none font-bold tracking-tighter z-10 w-fit overflow-x-visible" style={{ fontFamily: 'monospace' }}>
                {`████████╗ █████╗ ██╗  ██╗██████╗ ██╗████████╗████████╗██╗███╗   ██╗
╚══██╔══╝██╔══██╗██║ ██╔╝██╔══██╗██║╚══██╔══╝╚══██╔══╝██║████╗  ██║
   ██║   ███████║█████╔╝ ██████╔╝██║   ██║      ██║   ██║██╔██╗ ██║
   ██║   ██╔══██║██╔═██╗ ██╔══██╗██║   ██║      ██║   ██║██║╚██╗██║
   ██║   ██║  ██║██║  ██╗██║  ██║██║   ██║      ██║   ██║██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝      ╚═╝   ╚═╝╚═╝  ╚═══╝`}
            </pre>

            <div className="space-y-6 max-w-2xl z-10">
                <div className="text-gray-300">[SYSTEM INITIALIZED] - Takrittin Portfolio v1.0</div>
                <div className="text-gray-400">Welcome to Takrittin! Portfolio. To see more information just scroll down.</div>

                {/* Dropdown */}
                <div className="relative inline-block mt-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={
                            "px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:border-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] " +
                            (isOpen ? "border-[#00ffff] shadow-[0_0_15px_rgba(0,255,255,0.4)]" : "")
                        }
                    >
                        <span className="text-[#00ffff]">⚡</span> Quick Access
                        <svg
                            className={"w-4 h-4 transition-transform duration-200 " + (isOpen ? "rotate-180" : "")}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown Menu with Glassmorphism/Starlight feel */}
                    {isOpen && (
                        <div className="absolute left-0 mt -2 w-48 rounded-md bg-[#161b22]/90 backdrop-blur-md border border-[#30363d] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden z-20 animate-in fade-in zoom-in duration-200">
                            {[
                                { label: 'Resume', icon: '📄', link: 'https://drive.google.com/file/d/10-ywtIYVdA1ycgpKAdNMH4uKP7vZl26V/view?usp=sharing' },
                                { label: 'About me', icon: '👤', link: '#about' },
                                { label: 'Projects', icon: '💻', link: '#projects' },
                                { label: 'Experience', icon: '💼', link: '#experience' },
                                { label: 'Connect', icon: '🤝', link: '#contact' },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.link}
                                    // Logic: If the link starts with "http", open in new tab; otherwise, stay in current tab.
                                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#21262d] hover:text-[#00ffff] transition-colors"
                                >
                                    <span className="mr-2">{item.icon}</span> {item.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;