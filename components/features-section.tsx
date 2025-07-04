"use client"; // Ensure this is at the top of the file
import { Card, CardContent } from "@/components/ui/card";
import { handleVideoClick } from "@/lib/youtube-utils";
import {
  FileText,
  TrendingUp,
  CreditCard,
  BarChart3,
  RefreshCw,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import VideoModel from "./video-model";

const features = [
  {
    icon: FileText,
    titleKey: "featuresSection.feature1_title",
    descriptionKey: "featuresSection.feature1_description",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    titleKey: "featuresSection.feature2_title",
    descriptionKey: "featuresSection.feature2_description",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: CreditCard,
    titleKey: "featuresSection.feature3_title",
    descriptionKey: "featuresSection.feature3_description",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BarChart3,
    titleKey: "featuresSection.feature4_title",
    descriptionKey: "featuresSection.feature4_description",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: RefreshCw,
    titleKey: "featuresSection.feature5_title",
    descriptionKey: "featuresSection.feature5_description",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Globe,
    titleKey: "featuresSection.feature6_title",
    descriptionKey: "featuresSection.feature6_description",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];
type Video = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  thumbnail: string;
  duration: string;
  youtubeUrl?: string;
};
export function FeaturesSection() {
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const [playingVideo, setPlayingVideo] = useState<{
    sectionIndex: number;
    videoIndex: number;
    video: Video;
  } | null>(null);
  const closeVideo = () => {
    setPlayingVideo(null);
  };
  return (
    <section className={`py-24 bg-white  `}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 ${
          i18n.language === "si"
            ? "lg:top-[270px]  xl:top-32 relative"
            : i18n.language === "ta"
            ? "lg:top-[290px] xl:top-16 relative"
            : "lg:top-12 relative"
        }`}
      >
        <div className="text-center space-y-4 mb-16 mt-12 pt-8 ">
          <h2
            className={`${
              i18n.language === "ta" || i18n.language === "si"
                ? "text-xl lg:text-[32px]"
                : "text-2xl"
            } sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-gray-900 mb-10 text-center leading-[1.6] lg:leading-none`}
          >
            {t("featuresSection.main_heading_title")}
          </h2>
          <p className="sm:text-lg md:text-xl text-gray-600  relative top-[-20px] sm:top-0 lg:top-[-20px]">
            {t("featuresSection.main_heading_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`relative mt-12 top-10 ${
            i18n.language === "si" ? "lg:mb-32" : ""
          }`}
        >
          {/* Background container with centered content */}
          <div
            className={`relative border border-gray-200 rounded-2xl overflow-hidden max-w-7xl mx-auto p-6  top-5 ${
              i18n.language === "ta"
                ? "lg:h-[200px]"
                : i18n.language === "si"
                ? "lg:h-[200px]"
                : "lg:h-[194px]"
            }`}
            style={{ backgroundColor: "#FB923C0A" }}
          >
            <div
              className={`text-center  max-w-2xl mx-auto ${
                i18n.language === "ta"
                  ? "lg:space-y-1 space-y-10"
                  : i18n.language === "si"
                  ? "lg:space-y-3 space-y-5"
                  : "space-y-4"
              }`}
            >
              <h3
                className={` ${
                  i18n.language === "ta" || i18n.language === "si"
                    ? "text-md lg:-mt-1"
                    : "text-lg mt-1"
                }  font-semibold text-gray-900  md:text-xl sm:text-base leading-[1.5] `}
                style={{ fontFamily: "Sora" }}
              >
                {t("featuresSection.nested_cta_title")}
              </h3>
              <p
                className={`${
                  i18n.language === "ta" || i18n.language === "si"
                    ? "text-sm"
                    : ""
                } text-base font-normal text-gray-600 lg:leading-[1.5] text-center md:text-md sm:text-sm leading-[1.5]`}
                style={{ fontFamily: "Sora" }}
              >
                {t("featuresSection.nested_cta_description")}
              </p>
              <button
                className={`bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors  lg-h-[40px] px-4 py-2 mx-auto block sm:w-auto text-nowrap ${
                  i18n.language === "ta" || i18n.language === "si"
                    ? "w-full max-w-[315px]"
                    : "w-full max-w-[188px]"
                }`}
                style={{
                  borderRadius: "8px",
                }}
                onClick={() =>
                  handleVideoClick(
                  
                    {
                      youtubeUrl: "http://www.youtube.com/watch?v=G_oyr4NuSfQ",
                    },
                    setPlayingVideo
                  )
                }
              >
                {t("featuresSection.nested_cta_button")}
              </button>
            </div>
            {/* Mobile phone image - Only visible on mobile, positioned above content */}
            <div className="flex md:hidden justify-between  relative mt-4">
              {" "}
              <div className="md:hidden flex justify-center  relative top-6 right-5">
                <img
                  src="/images/features/phone-secure.png"
                  alt={t("featuresSection.phone_secure_alt")}
                  className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
                />
              </div>
              {/* Mobile hand with cash image - Only visible on mobile, positioned below button */}
              <div className="md:hidden flex justify-center  relative top-6 left-6">
                <img
                  src="/images/features/money-hand.png"
                  alt={t("featuresSection.money_hand_alt")}
                  className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
                />
              </div>
            </div>
          </div>

          {/* Desktop/Tablet layout - Absolutely positioned images */}
          <div className="hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <div className="flex-shrink-0">
                <img
                  src="/images/features/phone-secure.png"
                  alt={t("featuresSection.phone_secure_alt")}
                  className="lg:w-[236px] lg:h-[236px] md:w-[180px] md:h-[180px]"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <div className="flex-shrink-0">
                <img
                  src="/images/features/money-hand.png"
                  alt={t("featuresSection.money_hand_alt")}
                  className="lg:w-[236px] lg:h-[236px] md:w-[180px] md:h-[180px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {playingVideo && (
        <VideoModel closeVideo={closeVideo} playingVideo={playingVideo} />
      )}
    </section>
  );
}
