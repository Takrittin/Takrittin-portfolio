import React from "react";

const Skill = () => {
    return (
        <section id="skills" className="p-4 sm:p-6 md:p-12 lg:p-16 border-t border-[#30363d] min-h-[50vh]">
            <div className="mb-8">
                <span className="text-[#00ffff] font-bold">takrittin@portfolio:~$</span> cat skills.json
            </div>
            <div className="bg-[#0d1117] p-5 md:p-6 rounded-lg border border-[#30363d] max-w-4xl shadow-inner overflow-x-auto">
                <pre className="text-[#27c93f] text-sm md:text-base leading-relaxed">
                    {`{
  "Languages": [
    "[Python]", 
    "[JavaScript]", 
    "[Java]",
    "[C++]",
  ],
  "Data Engineer & Machine Learning": [
    "[Pandas]", 
    "[Sckit-learn]", 
    "[PySpark]",
  ],
  "Frontend": [
    "[HTML]",
    "[CSS]",
    "[React.js]"
  ],
  "Backend": [
    "[Node.js]",
    "[Express.js]"
  ],
  "tools": [
    "[Git]", 
    "[Docker]", 
  ]
}`}
                </pre>
            </div>
        </section>
    )
}

export default Skill;
