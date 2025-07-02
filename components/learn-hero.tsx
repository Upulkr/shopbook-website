"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { VideoTutorials } from "./video-tutorials";
import { ScreenFlows } from "./screen-flows";
import { useTranslation } from "react-i18next";

const topics = [
  {
    id: "getting-started",
    icon: "🚀",
    titleKey: "howItWorksSection.getting_started",
    steps: 4,
    color: "text-green-600",
    bgColor: "bg-green-50",
    flows: [
      {
        number: 1,
        titleKey: "howItWorks.step1_title", // Use a key for translation
        descriptionKey: "howItWorks.step1_description", // Use a key for translation
        image: "/images/how-shopbook-works/create-invoices.png",
      },
      {
        number: 2,
        titleKey: "howItWorks.step2_title",
        descriptionKey: "howItWorks.step2_description",
        image: "/images/how-shopbook-works/send-invoices.png",
      },
      {
        number: 3,
        titleKey: "howItWorks.step3_title",
        descriptionKey: "howItWorks.step3_description",
        image: "/images/how-shopbook-works/automatic-reminder.png",
      },
      {
        number: 4,
        titleKey: "howItWorks.step4_title",
        descriptionKey: "howItWorks.step4_description",
        image: "/images/how-shopbook-works/generate-reports.png",
      },
    ],
  },
  {
    id: "create-share",
    icon: "📄",
    titleKey: "howItWorksSection.create_share_invoices",
    steps: 4,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    flows: [],
  },
  {
    id: "collect-credits",
    icon: "💳",
    titleKey: "howItWorksSection.collect_outstanding_credits",
    steps: 2,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    flows: [],
  },
  {
    id: "auto-reminders",
    icon: "⏰",
    titleKey: "howItWorksSection.set_auto_reminders",
    steps: 2,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    flows: [],
  },
  {
    id: "view-customers",
    icon: "👥",
    titleKey: "howItWorksSection.view_due_customers",
    steps: 2,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    flows: [],
  },
  {
    id: "customer-reports",
    icon: "📊",
    titleKey: "howItWorksSection.share_customer_reports",
    steps: 4,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    flows: [],
  },
];

const videoSections = [
  {
    titleKey: "howItWorksSection.invoice_book",
    videos: [
      {
        id: "create-invoice-with-shopbook-app",
        titleKey: "howItWorksSection.create_invoice_title",
        descriptionKey: "howItWorksSection.create_invoice_description",
        thumbnail: "",
        duration: "4:20",
        youtubeUrl: "http://www.youtube.com/watch?v=G_oyr4NuSfQ",
      },
      {
        id: "create-invoice",
        titleKey: "howItWorksSection.how_to_create_invoice_title",
        descriptionKey: "howItWorksSection.how_to_create_invoice_description",
        thumbnail: "",
        duration: "3:45",
        youtubeUrl: "http://www.youtube.com/watch?v=bF2rcPYpPMs",
      },
      {
        id: "a",
        titleKey: "howItWorksSection.create_invoice_title",
        descriptionKey: "howItWorksSection.create_invoice_description",
        thumbnail: "",
        duration: "4:20",
        youtubeUrl: "http://www.youtube.com/watch?v=G_oyr4NuSfQ",
      },
      {
        id: "b",
        titleKey: "howItWorksSection.how_to_create_invoice_title",
        descriptionKey: "howItWorksSection.how_to_create_invoice_description",
        thumbnail: "",
        duration: "3:45",
        youtubeUrl: "http://www.youtube.com/watch?v=bF2rcPYpPMs",
      },
      {
        id: "c",
        titleKey: "howItWorksSection.create_invoice_title",
        descriptionKey: "howItWorksSection.create_invoice_description",
        thumbnail: "",
        duration: "4:20",
        youtubeUrl: "http://www.youtube.com/watch?v=G_oyr4NuSfQ",
      },
      {
        id: "d",
        titleKey: "howItWorksSection.how_to_create_invoice_title",
        descriptionKey: "howItWorksSection.how_to_create_invoice_description",
        thumbnail: "",
        duration: "3:45",
        youtubeUrl: "http://www.youtube.com/watch?v=bF2rcPYpPMs",
      },
    ],
  },
  {
    titleKey: "howItWorksSection.login_process",
    videos: [
      {
        id: "log-in-to-shopbook",
        titleKey: "howItWorksSection.how_to_login_title",
        descriptionKey: "howItWorksSection.how_to_login_description",
        thumbnail: "",
        duration: "0:58",
        youtubeUrl: "http://www.youtube.com/watch?v=oFC2Xf1WsPQ",
      },
      {
        id: "how-to-login-existing-user",
        titleKey: "howItWorksSection.how_to_login_existing_user_title",
        descriptionKey:
          "howItWorksSection.how_to_login_existing_user_description",
        thumbnail: "",
        duration: "0.54",
        youtubeUrl: "http://www.youtube.com/watch?v=a3JMY1QAsWU",
      },
    ],
  },
  {
    titleKey: "howItWorksSection.items_adding",
    videos: [
      {
        id: "payment-tracking-3",
        titleKey: "howItWorksSection.payment_tracking_reports_title",
        descriptionKey:
          "howItWorksSection.payment_tracking_reports_description",
        thumbnail: "/images/video-tutorial-4.png",
        duration: "5:30",
      },
      {
        id: "add-items-invoice-3",
        titleKey: "howItWorksSection.add_items_invoice_title",
        descriptionKey: "howItWorksSection.add_items_invoice_description",
        thumbnail: "/images/video-tutorial-2.png",
        duration: "3:10",
      },
      {
        id: "payment-tracking-4",
        titleKey: "howItWorksSection.payment_tracking_reports_title",
        descriptionKey:
          "howItWorksSection.payment_tracking_reports_description",
        thumbnail: "/images/video-tutorial-4.png",
        duration: "5:30",
      },
      {
        id: "add-items-invoice-4",
        titleKey: "howItWorksSection.add_items_invoice_title",
        descriptionKey: "howItWorksSection.add_items_invoice_description",
        thumbnail: "/images/video-tutorial-2.png",
        duration: "3:10",
      },
      {
        id: "payment-tracking-5",
        titleKey: "howItWorksSection.payment_tracking_reports_title",
        descriptionKey:
          "howItWorksSection.payment_tracking_reports_description",
        thumbnail: "/images/video-tutorial-4.png",
        duration: "5:30",
      },
      {
        id: "add-items-invoice-5",
        titleKey: "howItWorksSection.add_items_invoice_title",
        descriptionKey: "howItWorksSection.add_items_invoice_description",
        thumbnail: "/images/video-tutorial-2.png",
        duration: "3:10",
      },
    ],
  },
];
export function LearnHero() {
  const [activeTab, setActiveTab] = useState("video-tutorials");

  const [currentVideoIndex, setCurrentVideoIndex] = useState([0, 0, 0]); // For each section
  const [isMobile, setIsMobile] = useState(false);
  const { t, i18n } = useTranslation();
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
    <section className="py-12 md:py-20  min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h1
            className={`text-gray-900 mt-10  ${
              i18n.language === "si" || i18n.language === "ta"
                ? "text-xl  sm:text-2xl md:text-3xl lg:text-[32px]"
                : "text-2xl sm:text-3xl md:text-4xl lg:text-[38px]"
            } font-bold leading-[1.6] lg:leading-none`}
            style={{
              fontFamily: "Sora",
              fontWeight: 600,
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            {t("learnsection.main_title")}
          </h1>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl mt-4 mb-4 leading-[2] lg:leading-none"
            style={{
              fontFamily: "Sora",
              fontWeight: 400,
              lineHeight: "1.6", // increased line height
              letterSpacing: "0.5px", // optional refinement
              textAlign: "center",
            }}
          >
            {t("learnsection.main_subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12 mx-auto">
          <div
            className={`bg-blue-50 rounded-lg p-2 shadow-sm border border-gray-200 mx-auto flex items-center justify-center w-full max-w-[484px]   text-md`}
            style={{
              height: "50px",
            }}
          >
            <button
              onClick={() => setActiveTab("video-tutorials")}
              className={`items-center px-4 md:px-6 rounded-md font-medium transition-colors flex-1 h-[35px] ${
                activeTab === "video-tutorials"
                  ? "bg-white  shadow-lg"
                  : "text-gray-[#697386] hover:text-gray-900"
              }`}
            >
              {t("learnsection.video_tutorials_tab")}
            </button>
            <button
              onClick={() => setActiveTab("screen-flows")}
              className={`items-center px-4 md:px-6  rounded-md font-medium transition-colors flex-1 h-[35px] ${
                activeTab === "screen-flows"
                  ? "bg-white shadow-lg"
                  : "text-gray-[#697386] hover:text-gray-900"
              }`}
            >
              {t("learnsection.screen_flows_tab")}
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
           
          />
        )}
      </div>
    </section>
  );
}
