import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="p-4 sm:p-6 md:p-12 lg:p-16 border-t border-[#30363d] min-h-[50vh] flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <span className="text-[#00ffff] font-bold">takrittin@portfolio:~$</span> ./contact.sh
            </div>
            <div className="max-w-2xl bg-[#0d1117] border border-[#30363d] rounded-lg p-6 md:p-8 shadow-inner">
              <h2 className="text-xl md:text-2xl text-white font-bold mb-4">Contact : </h2>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#2a2f3a] hover:bg-[#3b4150] text-white px-5 py-2.5 rounded text-sm md:text-base font-semibold transition-all border border-[#404756] hover:border-gray-400">
                  Email : krittin.wankundee@gmail.com
                </button>
                <button className="bg-[#2a2f3a] hover:bg-[#3b4150] text-[#00ffff] px-5 py-2.5 rounded text-sm md:text-base font-semibold transition-all border border-[#404756] hover:border-gray-400">
                  Tel : +66 944185400
                </button>
                <button className="bg-[#2a2f3a] hover:bg-[#3b4150] text-[#00ffff] px-5 py-2.5 rounded text-sm md:text-base font-semibold transition-all border border-[#404756] hover:border-gray-400">
                  Github : https://github.com/Takrittin
                </button>
                <button className="bg-[#2a2f3a] hover:bg-[#3b4150] text-[#00ffff] px-5 py-2.5 rounded text-sm md:text-base font-semibold transition-all border border-[#404756] hover:border-gray-400">
                  Location : Bangkok, Thailand
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center mt-12 pb-12">
            <span className="text-[#00ffff] font-bold mr-2 md:text-lg">takrittin@portfolio:~$</span>
            <div className="w-3 h-6 bg-[#27c93f] animate-pulse"></div>
          </div>
        </section>
    )
}

export default Contact;