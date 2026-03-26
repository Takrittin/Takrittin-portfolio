import React from "react";

const projects =[
    {
      id:1,
      title:"Restaurant reservation",
      description:"Developed a RESTful API for restaurant reservations using Node.js, Express.js, and MongoDB, supporting full CRUD operations (Create, Read, Update, Delete)",
      tech:["Node.js","Express.js","MongoDB"]
    },
    {
      id:2,
      title:"Poke Battle Game",
      description:"Designed the UX/UI using a Pokémon-style theme, including the main menu, battle interface, and win/lose screens.",
      tech:["HTML","CSS","JavaScript"]
    },
    {
      id:3,
      title:"Urban Issue Data Pipeline",
      description:"Developed an end-to-end data pipeline to collect, clean, and process urban issue data from multiple sources, including web scraping. Performed data transformation and feature engineering using Pandas and PySpark, and built machine learning models using Scikit-learn to analyze and predict patterns in the data.",
      tech:["Python","Pandas","PySpark","Scikit-learn","SQL"]
    }
]

const Project = () => {
    return (
        <section id="projects" className="p-4 sm:p-6 md:p-12 lg:p-16 border-t border-[#30363d] min-h-[60vh]">
          <div className="mb-8">
            <span className="text-[#00ffff] font-bold">takrittin@portfolio:~$</span> ls -la ./projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Project Cards (Placeholders) */}
            {projects.map((project) => (
              <div key={project.id} className={`border border-[#30363d] bg-[#0d1117] p-6 rounded-lg hover:border-gray-500 transition-colors shadow-sm ${project.id === 3 ? 'md:col-span-2' : ''}`}>
                <h3 className="text-white text-lg font-bold mb-3 flex items-center">
                  <span className="mr-2">📁</span> {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold tracking-wide">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="bg-[#1f242e] px-2 py-1 rounded text-[#00ffff]">[{techItem}]</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}

export default Project;