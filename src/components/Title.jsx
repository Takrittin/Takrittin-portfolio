import React from "react";

const Title = () => {
    return (
      <div className="bg-[#171b22] px-4 py-3 flex items-center justify-between border-b border-[#30363d] shrink-0 z-10 relative">
        <div className="flex space-x-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm absolute left-1/2 transform -translate-x-1/2 tracking-wider whitespace-nowrap">
          takrittin@portfolio-terminal:~
        </div>
        <div className="flex items-center text-[#27c93f] text-xs font-semibold tracking-wide">
          <span className="mr-2">●</span> ONLINE
        </div>
      </div>
    )
}

export default Title;