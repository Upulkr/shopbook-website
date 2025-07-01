import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type Topic = {
  id: string;
  icon: string;
  titleKey: string;
  steps: number;
  color: string;
  bgColor: string;
  flows: {
    image: string;
    titleKey: string;
    descriptionKey: string;
  }[];
};

type ScreenFlowsProps = {
  topics: Topic[];
  selectedTopic: string;
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
};

export function ScreenFlows({
  topics,
  selectedTopic,
  setSelectedTopic,
}: ScreenFlowsProps) {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [openViewFormobileView, setOpenViewFormobileView] = useState(true);
  const currentTopic = topics.find((topic) => topic.id === selectedTopic);
  return (
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
      {/* Left side - Topics */}
      <div className="bg-[#F2F2F2] space-y-4 md:space-y-6 border border-gray-200 rounded-[14px] p-4 md:p-6 w-full lg:w-[537px] lg:h-[600px]">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 relative lg:left-2">
          Explore the guide below
        </h2>
        <div className={`space-y-7 `}>
          {topics.map((topic) => (
            <div key={topic.id} className="w-full">
              <button
                key={topic.id}
                onClick={() => {
                  setSelectedTopic(topic.id);
                  setOpenViewFormobileView(!openViewFormobileView);
                }}
                className={` ${
                  selectedTopic === topic.id
                    ? "border border-[#2563EB] bg-blue-500/20"
                    : ""
                } p-3 md:p-4 rounded-xl border transition-all duration-200 text-left w-full lg:w-[448px] h-auto lg:h-[58px] bg-white`}
              >
                <div className="flex items-center justify-between ">
                  <div className="flex items-center space-x-3  relative ">
                    <div className="flex items-center justify-center relative lg:-top-1">
                      <Image
                        src={`/images/icons/${topic.id}-icon.png`}
                        alt={`${topic.titleKey} icon`}
                        width={30}
                        height={30}
                        className="w-[30px] h-[25px]"
                      />
                    </div>
                    <div className="w-full relative lg:-top-1">
                      <h3
                        className="text-gray-900 text-[12px]  leading-none  min-w-[100px] text-wrap lg:text-[16px] "
                        style={{
                          fontFamily: "Sora",
                          fontWeight: 600,

                          lineHeight: "100%",
                          letterSpacing: "0%",
                        }}
                      >
                        {t(topic.titleKey)}
                      </h3>
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      setOpenViewFormobileView(!openViewFormobileView)
                    }
                    className=" relative -top-1 lg:block hidden lg:inline-flex items-center justify-center h-[36px] px-4 rounded-full cursor-pointer bg-[#2563eb]/20 hover:bg-blue-200/60 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span className="text-[12px]  lg:text-[16px] font-semibold  leading-none ">
                      View
                    </span>
                    <ChevronRight className="w-5 h-5  ml-1 -mt-[1px]" />
                  </div>
                  <div
                    onClick={() =>
                      setOpenViewFormobileView(!openViewFormobileView)
                    }
                    className="lg:hidden flex space-x-2 rounded-full text-center text-nowrap w-[62px] h-[24px] items-center justify-center relative "
                    style={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }} // 20% opacity
                  >
                    <div className="flex items-center justify-center left-[1.5px]  relative">
                
                      <span className="text-center text-[12px] leading-none relative ">
                        View
                      </span>
                      {openViewFormobileView && topic.id === selectedTopic ? (
                        <ChevronUp className="w-[16px] h-[16px] text-[12px] lg:hidden" />
                      ) : (
                        <ChevronDown className="w-[16px] h-[16px] text-[12px]" />
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {/* Mobile View */}
              {openViewFormobileView && topic.id === selectedTopic && (
                <div
                  className={`lg:hidden grid grid-cols-3  items-center justify-center space-x-4   w-full bg-[#F2F2F2]  ${
                    !currentTopic?.flows[activeStep]?.image
                      ? "h-[30px]"
                      : "h-[330px]   bg-[#F2F2F2] "
                  }     p-4 `}
                >
                  {currentTopic?.flows[activeStep]?.image ? (
                    <>
                      <div className="flex items-center justify-center  z-10">
                        <button
                          onClick={() => {
                            if (activeStep > 0) setActiveStep(activeStep - 1);
                          }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
          ${
            activeStep === 0
              ? "bg-orange-300 text-gray-400 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
                          disabled={activeStep === 0}
                        >
                          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </button>
                      </div>

                      <div className="flex flex-col items-center ">
                        <div
                          className="relative "
                          onTouchStart={(e) => {
                            const touch = e.touches[0];
                            e.currentTarget.dataset.startX =
                              touch.clientX.toString();
                          }}
                          onTouchEnd={(e) => {
                            const startX = Number.parseFloat(
                              e.currentTarget.dataset.startX || "0"
                            );
                            const endX = e.changedTouches[0].clientX;
                            const diff = startX - endX;
                            const threshold = 50;

                            if (Math.abs(diff) > threshold) {
                              if (
                                diff > 0 &&
                                activeStep < currentTopic.flows.length - 1
                              ) {
                                // Swipe left - go to next
                                setActiveStep(activeStep + 1);
                              } else if (diff < 0 && activeStep > 0) {
                                // Swipe right - go to previous

                                setActiveStep(activeStep - 1);
                              }
                            }
                          }}
                        >
                          <div className=" h-[290px] w-[250px]  ">
                            <Image
                              src={currentTopic?.flows[activeStep]?.image || ""}
                              alt={`Step ${activeStep + 1} image`}
                              width={200}
                              height={250}
                              className="w-[146px] h-[287px] object-cover justify-center items-center mx-auto"
                              unoptimized
                              priority
                            />
                          </div>
                        </div>
                        {/* Step indicators */}
                        <div className="flex space-x-2">
                          {currentTopic?.flows.map((_, index) => (
                            <button
                              key={index}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                activeStep === index
                                  ? "bg-[#2563EB] w-[24px]"
                                  : "bg-gray-300"
                              }`}
                              onClick={() => setActiveStep(index)}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center  z-10">
                        <button
                          onClick={() => setActiveStep(activeStep + 1)}
                          className={`
 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors 
           ${
             activeStep === (currentTopic?.flows?.length ?? 0) - 1
               ? "bg-orange-300 text-gray-400 cursor-not-allowed"
               : "bg-orange-500 text-orange-600 hover:bg-orange-600"
           }       `}
                          disabled={
                            activeStep ===
                            (currentTopic?.flows?.length ?? 0) - 1
                          }
                        >
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-900 text-base leading-none text-[12px] text-center justify-center items-center mx-auto text-nowrap ">
                      No flows available for this topic
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Phone mockup */}
      {/* desktop version */}
      {currentTopic?.flows[activeStep]?.image ? (
        <div className="lg:block hidden flex-row lg:flex items-center justify-center space-x-4 lg:space-x-6 w-full lg:w-[537px] h-[600px] bg-[#F2F2F2] border border-gray-200 rounded-[14px] p-4 md:p-6">
          <button
            onClick={() => setActiveStep(activeStep - 1)}
            className={` w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors 
           ${
             activeStep === 0
               ? "bg-orange-300 text-gray-400 cursor-not-allowed"
               : "bg-orange-500 text-orange-600 hover:bg-orange-600"
           }       `}
            disabled={activeStep === 0}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
          <div className="flex flex-col items-center space-y-6 ">
            <div className="relative ">
              <div className=" h-[500px] w-[250px]  overflow-hidden">
                <Image
                  src={currentTopic?.flows[activeStep]?.image || ""}
                  alt={`Step ${activeStep + 1} image`}
                  width={250}
                  height={500}
                  className="w-full h-full object-cover  "
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex space-x-2">
              {currentTopic?.flows.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    activeStep === index
                      ? "bg-[#2563EB] w-[24px]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => setActiveStep(activeStep + 1)}
            className={` w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors  ${
              activeStep === (currentTopic?.flows?.length ?? 0) - 1
                ? "bg-orange-300 text-gray-400 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
            disabled={activeStep === (currentTopic?.flows?.length ?? 0) - 1}
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>
        </div>
      ) : (
        <p className="text-gray-900 lg:block hidden text-base leading-none text-[12px] min-w-[100px] text-wrap sm:text-[16px] text-center justify-center items-center mx-auto ">
          No flows available for this topic
        </p>
      )}
    </div>
  );
}
