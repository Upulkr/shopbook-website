import Image from "next/image"
import React from "react"

type Topic = {
  id: string
  icon: string
  title: string
  steps: number
  color: string
  bgColor: string
}

type ScreenFlowsProps = {
  topics: Topic[]
  selectedTopic: string
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>
}

export function ScreenFlows({ topics, selectedTopic, setSelectedTopic }: ScreenFlowsProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
      {/* Left side - Topics */}
      <div className="space-y-4 md:space-y-6 border border-gray-200 rounded-[14px] p-4 md:p-6 w-full lg:w-[537px] lg:h-[502px]">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Choose a topic</h2>
        <div className={`space-y-3 `}>
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`${selectedTopic===topic.id?"bg-[#d3def3]":""} p-3 md:p-4 rounded-xl border transition-all duration-200 text-left w-full lg:w-[448px] h-auto lg:h-[58px] `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center">
                    <Image
                      src={`/images/icons/${topic.id}-icon.png`}
                      alt={`${topic.title} icon`}
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="w-full">
                    <h3
                      className="text-gray-900 text-base leading-none text-[12px] min-w-[100px] text-wrap sm:text-[16px] "
                      style={{
                        fontFamily: "Sora",
                        fontWeight: 600,
        
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      {topic.title}
                    </h3>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-600 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium  text-center text-nowrap">
                  {topic.steps} steps
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Phone mockup */}
      <div className="bg-[#F6F6F6] flex justify-center lg:justify-end mt-8 lg:mt-0 border border-gray-200 rounded-[14px] p-2 sm:p-4 md:p-6 w-full lg:w-[633px] lg:h-[502px]">
        <div className="bg-[#F6F6F6] relative flex items-center justify-center h-[210px] sm:h-[220px] md:h-[400px] lg:h-[470px] w-full">
          <Image
            src={
              selectedTopic === "getting-started"
                ? "/images/getting-started-tutorial.png"
                : `/images/learn-${selectedTopic}.png`
            }
            width={160}
            height={200}
            alt={`Shopbook ${topics.find((t) => t.id === selectedTopic)?.title} tutorial interface`}
            className="object-contain transition-all duration-300 w-[200px] md:w-[200px] lg:w-[240px] h-[200px] md:h-[190px] lg:h-[440px] h-[120px]"
            priority
          />
        </div>
      </div>
    </div>
  )
} 