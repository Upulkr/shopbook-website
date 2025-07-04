import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
};

export function ScreenFlows({ topics }: ScreenFlowsProps) {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState(0); // Initialize with the first step
  const [openViewFormobileView, setOpenViewFormobileView] = useState(true);
  const [selectedTopicid, setSelectedTopicId] = useState("getting-started");
  const currentTopic = topics.find((topic) => topic.id === selectedTopicid);
  console.log("currentTopic", currentTopic?.id);
  return (
    <div className="grid lg:grid-cols-2 lg:px-8 overflow-x-hidden  lg:space-y-0 space-y-3 ">
      <div
        className={`p-4 lg:p-0 lg:w-[537px] lg:h-[502px] bg-[#F6F6F6] min-w-[340px] h-auto  rounded-[14px] border-[1px] realtive ${
          i18n.language === "ta" && "lg:h-[780px]"
        }`}
      >
        <h2 className="lg:text-[20px] text-sm font-semibold font-family-sora relative mt-5    lg:left-12 ">
          Explore the guide below
        </h2>
        <div className="justify-center mx-auto  grid  relative mt-5 space-y-3">
          {topics.map((topic) => {
            // Compose className for the topic container
            const topicContainerClass = [
              selectedTopicid === topic.id ? "border border-[#2563EB]" : "",
              " mx-auto flex items-center justify-between bg-[#FFFFFF] lg:w-[448px]  lg:h-[58px]   w-[336px] h-[54px] rounded-[14px] border-[2px] juistify-center",
              i18n.language === "ta" ? "lg:h-[105px]" : "",
            ].join(" ");

            // Compose className for the topic icon
            const topicIconClass = [
              "lg:w-[35px] lg:height-[35px] w-[30px] h-[20px] object-cover",
              i18n.language === "ta" ? "lg:w-[40px] lg:h-[30px]" : "",
              "relative",
            ].join(" ");

            // Compose className for the topic title
            const topicTitleClass = [
              "lg:text-[14px] text-[11px] font-semibold  relative  text-left font-family-sora  text-wrap w-[176px] lg:w-[256px] ",
              i18n.language === "ta" ? "lg:text-[15px] lg:w-[270px]" : "",
              i18n.language === "si"
                ? "text-[11px]"
                : i18n.language === "ta"
                ? "text-[9px]"
                : "",
            ].join(" ");

            // Compose className for the view button (desktop)
            const viewButtonClass = [
              "lg:flex hidden",
              "cursor-pointer rounded-full mx-auto justify-center items-center",
              "lg:w-[80px] lg:h-[25px] w-[57px] h-[18px]",
              "bg-[#2563eb]/20 hover:bg-blue-200/60 transition-all duration-200 shadow-sm",
              i18n.language === "ta" ? "lg:w-[90px] lg:h-[35px]" : "",
            ].join(" ");

            return (
              <React.Fragment key={topic.id}>
                <div
                  onClick={() => {
                    setSelectedTopicId(topic.id);
                    if (selectedTopicid === currentTopic?.id) {
                      setOpenViewFormobileView(true);
                    } else {
                      setOpenViewFormobileView(false);
                    }
                  }}
                  className={topicContainerClass}
                >
                  <div className="relative left-5">
                    <img
                      src={`/images/icons/${topic.id}-icon.png`}
                      alt={`${topic.titleKey} icon`}
                      className={topicIconClass}
                    />
                  </div>
                  <div className="flex items-center justify-start relative w-full left-9">
                    <p className={topicTitleClass}>{t(topic.titleKey)}</p>
                  </div>
                  <div className="relative right-5">
                    <div
                      className={viewButtonClass}
                     // Hide on mobile, show on lg
                    >
                      <p className="lg:text-[14px] relative text-[10px] left-1">
                        View
                      </p>
                      <ChevronRight className="w-4 lg:h-4 h-3 relative left-1" />
                    </div>
                    <div
                      className="lg:hidden flex space-x-2 rounded-full text-center text-nowrap w-[62px] h-[24px] items-center justify-center relative"
                      style={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }}
                    >
                      <div className="lg:hidden flex items-center justify-center left-[1.5px] relative w-[62px]">
                        <span className="text-center text-[11px] leading-none relative">
                          View
                        </span>
                        {openViewFormobileView &&
                        topic.id === selectedTopicid ? (
                          <ChevronUp className="w-[16px] h-[16px] text-[12px] lg:hidden" />
                        ) : (
                          <ChevronDown className="w-[16px] h-[16px] text-[12px]" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile View */}
                {openViewFormobileView && topic.id === selectedTopicid && (
                  <div
                    className={` lg:hidden grid grid-cols-3 items-center justify-center space-x-4 w-full bg-[#F2F2F2] ${
                      !currentTopic?.flows[activeStep]?.image
                        ? "h-[30px]"
                        : "h-[330px] bg-[#F2F2F2]"
                    } p-4`}
                  >
                    {currentTopic?.flows[activeStep]?.image ? (
                      <>
                        <div className="flex items-center justify-center z-10">
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
                            className="relative"
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
                            <div className="h-[290px] w-[250px]">
                              <Image
                                src={
                                  currentTopic?.flows[activeStep]?.image || ""
                                }
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
                        <div className="flex items-center justify-center z-10">
                          <button
                            onClick={() => setActiveStep(activeStep + 1)}
                            className={`
                          w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors 
                          ${
                            activeStep ===
                            (currentTopic?.flows?.length ?? 0) - 1
                              ? "bg-orange-300 text-gray-400 cursor-not-allowed"
                              : "bg-orange-500 text-orange-600 hover:bg-orange-600"
                          }`}
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
                      <p className="text-gray-900 text-sm relative left-6 leading-none text-[12px] text-center justify-center items-center mx-auto text-nowrap">
                        No flows available for this topic
                      </p>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/* Desktop View */}
      {currentTopic?.flows[activeStep]?.image ? (
        <div
          className={`hidden lg:flex flex-row items-center justify-center space-x-4 lg:w-[537px] lg:h-[502px] bg-[#F6F6F6] w-[356px] h-[783px]  rounded-[14px]  border-[1px] order-[1px] realtive ${
            i18n.language === "ta" && "lg:h-[780px]"
          }`}
        >
          <div>
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
          </div>

          <div className="flex flex-col items-center space-y-1 ">
            <img
              src={currentTopic?.flows[activeStep]?.image || ""}
              alt={`Step ${activeStep + 1} image`}
              className="w-[240px] h-[470px] object-cover  items-center justify-center"
            />
            {/* Step indicators */}
            <div className="flex space-x-2 relative -top-1">
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
          <div>
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
        </div>
      ) : (
        <p className="text-gray-900 hidden lg:block text-base leading-none text-[12px] min-w-[100px] text-wrap sm:text-[16px] text-center justify-center items-center mx-auto ">
          No flows available for this topic
        </p>
      )}
    </div>
  );
}
