import React from "react";

const Experience = () => {
    return (
        <section id="experience" className="p-4 sm:p-6 md:p-12 lg:p-16 border-t border-[#30363d] min-h-[60vh]">
          <div className="mb-8">
            <span className="text-[#00ffff] font-bold">takrittin@portfolio:~$</span> history | grep experience
          </div>
          <div className="max-w-3xl space-y-10 pl-4 md:pl-6 border-l-2 border-gray-700 ml-2">
            <div className="relative">
              <div className="absolute -left-[23px] md:-left-[31px] top-1.5 w-3.5 h-3.5 bg-gray-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-300">[Internship]</h3>
              <div className="text-gray-500 font-semibold text-sm md:text-base mt-1 mb-3">[RELEARN SOLUTION CO., LTD.]</div>
              <ul className="list-square list-inside text-sm md:text-base text-gray-500 space-y-2 leading-relaxed">
                <li>[Collaborated with the DevFixBug team to identify and resolve critical bugs in the Social Security Office project.]</li>
                <li>[Debugged frontend components and fixed state management errors using React.js, Redux, and JavaScript.]</li>
                <li>[Troubleshot backend logic and resolved database connectivity issues using Java Spring Boot and Oracle Database.]</li>
              </ul>
            </div>
          </div>
        </section>
    )
}

export default Experience;