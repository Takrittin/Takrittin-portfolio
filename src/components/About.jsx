import React from "react"

const About = () => {
    return (
        <section id="about" className="p-4 sm:p-6 md:p-12 lg:p-16 border-t border-[#30363d] min-h-[50vh]">
            <div className="mb-8">
                <span className="text-[#00ffff] font-bold">takrittin@portfolio:~$</span> whoami
            </div>
            <div className="pl-4 md:pl-6 border-l-2 border-gray-700 max-w-3xl space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed">Computer Engineering student at Chulalongkorn University 
                    with a strong interest in Data Engineering and AI. Experienced in backend systems and data processing using Python, Pandas, and PySpark. 
                    Passionate about designing data pipelines, processing large-scale data, and applying machine learning techniques to real-world problems.
                </p>
            </div>
        </section>
    );
};

export default About;