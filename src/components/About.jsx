import React from "react"

const About = () => {
    return (
        <section id="about" className="p-4 sm:p-6 md:p-12 lg:p-16 border-t border-[#30363d] min-h-[50vh]">
            <div className="mb-8">
                <span className="text-[#00ffff] font-bold">takrittin@portfolio:~$</span> whoami
            </div>
            <div className="pl-4 md:pl-6 border-l-2 border-gray-700 max-w-3xl space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">About Me</h2>
                <p className="text-gray-300 leading-relaxed">   I am a Computer Engineering student at Chulalongkorn University. 
                    I have experience in building backend systems and working with databases like PostgreSQL, MongoDB, and Oracle. I also have basic knowledge of Python and PySpark for processing and analyzing data. 
                    During my internship, I worked on a real project and learned how to fix problems in both frontend and backend systems. 
                    I am interested in data engineering and want to learn more about building data pipelines and working with cloud platforms.</p>
            </div>
        </section>
    );
};

export default About;