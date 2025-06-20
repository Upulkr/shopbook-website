"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { VideoTutorials } from "./video-tutorials";
import { ScreenFlows } from "./screen-flows";

const topics = [
  {
    id: "getting-started",
    icon: "🚀",
    title: "Getting Started",
    steps: 4,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "create-share",
    icon: "📄",
    title: "Create & Share Invoices",
    steps: 4,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "collect-credits",
    icon: "💳",
    title: "Collect Outstanding Credits",
    steps: 2,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: "auto-reminders",
    icon: "⏰",
    title: "Set Auto Reminders",
    steps: 2,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: "view-customers",
    icon: "👥",
    title: "View Due Customers & Amount",
    steps: 2,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    id: "customer-reports",
    icon: "📊",
    title: "Share Customer Reports",
    steps: 4,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
];

const videoSections = [
  {
    title: "Invoice Book",
    videos: [
      {
        id: "create-invoice-with-shopbook-app",
        title: "Create a invoice with Shopbook app",
        description: "Getting statr to create invoice",
        thumbnail: "",
        duration: "4:20",
        youtubeUrl:
          "https://www.youtube.com/watch?v=G_oyr4NuSfQ&list=PLmLMrF3cFazRqVfjFXkD8hOY3RfiGfm20&index=2",
      },
      {
        id: "create-invoice",
        title: "How to Create a invoice with few seconds?",
        description:
          "Learn how to create a invoice with in few seconds",
        thumbnail: "",
        duration: "3:45",
        youtubeUrl:
          "https://www.youtube.com/watch?v=bF2rcPYpPMs&list=PLmLMrF3cFazRqVfjFXkD8hOY3RfiGfm20&index=1",
      },
      
    
    ],
  },
  {
    title: "Login Process",
    videos: [
      {
        id: "log-in-to-shopbook",
        title: "How to login into Shopbook App",
        description: "How to login into Shopbook App",
        thumbnail: "",
        duration: "0:58",
      },
      {
        id: "how-to-login-existing-user",
        title: "How to login into Shopbook App, if your app got deleted or you're an existing user ",
        description: "How to login into Shopbook App, if your app got deleted or you're an existing user ",
        thumbnail: "",
        duration: "0.54",
        youtubeUrl:
        "https://www.youtube.com/watch?v=a3JMY1QAsWU&list=PLmLMrF3cFazR9GivtbsPqsqyZNzXJJtxW&index=1",
      },
    
   
    ],
  },
  // {
  //   title: "Items Adding",
  //   videos: [
  //     {
  //       id: "payment-tracking-3",
  //       title: "Payment Tracking & Reports",
  //       description: "Monitor payments and generate detailed business reports",
  //       thumbnail: "/images/video-tutorial-4.png",
  //       duration: "5:30",
  //     },
  //     {
  //       id: "add-items-invoice-3",
  //       title: "Add items when creating an invoice",
  //       description: "Send WhatsApp and SMS reminders to get paid faster",
  //       thumbnail: "/images/video-tutorial-2.png",
  //       duration: "3:10",
  //     },
  //     {
  //       id: "payment-tracking-4",
  //       title: "Payment Tracking & Reports",
  //       description: "Monitor payments and generate detailed business reports",
  //       thumbnail: "/images/video-tutorial-4.png",
  //       duration: "5:30",
  //     },
  //     {
  //       id: "add-items-invoice-4",
  //       title: "Add items when creating an invoice",
  //       description: "Send WhatsApp and SMS reminders to get paid faster",
  //       thumbnail: "/images/video-tutorial-2.png",
  //       duration: "3:10",
  //     },
  //     {
  //       id: "payment-tracking-5",
  //       title: "Payment Tracking & Reports",
  //       description: "Monitor payments and generate detailed business reports",
  //       thumbnail: "/images/video-tutorial-4.png",
  //       duration: "5:30",
  //     },
  //     {
  //       id: "add-items-invoice-5",
  //       title: "Add items when creating an invoice",
  //       description: "Send WhatsApp and SMS reminders to get paid faster",
  //       thumbnail: "/images/video-tutorial-2.png",
  //       duration: "3:10",
  //     },
  //   ],
  // },
];

export function LearnHero() {
  const [activeTab, setActiveTab] = useState("video-tutorials");
  const [selectedTopic, setSelectedTopic] = useState("getting-started");
  const [currentVideoIndex, setCurrentVideoIndex] = useState([0, 0, 0]); // For each section
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const videosPerView = isMobile ? 1 : 3; // Show 1 video on mobile, 3 on larger screens

  const goToPreviousVideo = (sectionIndex: number) => {
    setCurrentVideoIndex((prev) => {
      const newIndex = [...prev];
      newIndex[sectionIndex] = Math.max(0, newIndex[sectionIndex] - 1);
      return newIndex;
    });
  };

  const goToNextVideo = (sectionIndex: number) => {
    setCurrentVideoIndex((prev) => {
      const newIndex = [...prev];
      const maxIndex = Math.max(
        0,
        videoSections[sectionIndex].videos.length - videosPerView
      );
      newIndex[sectionIndex] = Math.min(maxIndex, newIndex[sectionIndex] + 1);
      return newIndex;
    });
  };

  const isAtStart = (sectionIndex: number) =>
    currentVideoIndex[sectionIndex] === 0;
  const isAtEnd = (sectionIndex: number) => {
    const maxIndex = Math.max(
      0,
      videoSections[sectionIndex].videos.length - videosPerView
    );
    return currentVideoIndex[sectionIndex] >= maxIndex;
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h1
            className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Master Shopbook in Minutes
          </h1>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl"
            style={{
              fontFamily: "Sora",
              fontWeight: 400,
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Complete tutorials and screen flows to help you get the most out of
            Shopbook and get paid faster.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12 mx-auto">
          <div
            className="bg-blue-50 rounded-lg p-1 shadow-sm border border-gray-200 mx-auto flex items-center justify-center w-full max-w-[484px]"
            style={{
              height: "65px",
            }}
          >
            <button
              onClick={() => setActiveTab("video-tutorials")}
              className={`px-4 md:px-6 py-3 rounded-md font-medium transition-colors flex-1 h-[49px] ${
                activeTab === "video-tutorials"
                  ? "bg-white "
                  : "text-gray-[#697386] hover:text-gray-900"
              }`}
            >
              Video Tutorials
            </button>
            <button
              onClick={() => setActiveTab("screen-flows")}
              className={`px-4 md:px-6 py-3 rounded-md font-medium transition-colors flex-1 h-[49px] ${
                activeTab === "screen-flows"
                  ? "bg-white"
                  : "text-gray-[#697386] hover:text-gray-900"
              }`}
            >
              Screen Flows
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "video-tutorials" ? (
          <VideoTutorials
            videoSections={videoSections}
            currentVideoIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            isMobile={isMobile}
          />
        ) : (
          <ScreenFlows
            topics={topics}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
          />
        )}
      </div>
    </section>
  );
}
