import { Star } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export function SocialProof() {
  const { t, i18n } = useTranslation();
  const socialProofData = [
    {
      id: "downloads",
      icon: "avatars",
      subtitle: "15K+",
      mainTextColor: "text-pink-600",
      title: t("socialProofSection.downloads_title"),
      hasAvatars: true,
    },
    {
      id: "rating",
      icon: "stars",

      mainTextColor: "text-gray-900",
      subtitle: t("socialProofSection.rating_subtitle"),
      title: t("socialProofSection.rating_title"),
      hasStars: true,
    },
    {
      id: "security",
      icon: "none",
      mainText: "100%",
      mainTextColor: "text-green-600",
      subtitle: t("socialProofSection.security_subtitle"),
      title: t("socialProofSection.security_title"),
    },
    {
      id: "languages",
      icon: "none",
      mainText: "3",
      mainTextColor: "text-orange-600",
      subtitle: t("socialProofSection.languages_subtitle"),
      title: t("socialProofSection.languages_title"),
    },
  ];

  return (
    <section className={`py-0 bg-white overflow-x-hidden lg:mb-24 `} style={{ overflowY: "hidden" }}>
      <div className={`  w-full bg-[#F2F6FE] py-8 md:py-10 top-20 xl:h-[137px] lg:absolute lg:top-[625px] lg:left-0 relative flex items-center justify-center ${i18n.language==='ta'?"lg:mt-[120px] ":""}` }>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 overflow-x-hidden">
          <div className="overfollow-y-hidden flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-center lg:space-x-12 "  >
            {socialProofData.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col items-center justify-between
                  h-28 sm:h-32 py-2 relative
                  w-full sm:w-auto
                  max-w-xs sm:max-w-none
                "
              >
                {/* Fixed height container for icons - ALL ITEMS SAME HEIGHT */}
                <div className="h-6 flex items-center justify-center relative top-3 sm:top-6">
                  {item.hasAvatars && (
                    <Image
                      src="/images/ui/user-avatars.png"
                      alt="User avatars"
                      width={100}
                      height={35}
                      className="h-7 w- align-baseline"
                      style={{ verticalAlign: "baseline" }}
                    />
                  )}
                  {item.hasStars && (
                    <div className="flex justify-center space-x-1">
                     <img
                        src="/images/rating/Rating.svg"
                        alt="Rating stars"
                        width={100}
                        height={35}
                        className="h-7 w-auto align-baseline "
                        style={{ verticalAlign: "baseline" }}
                      />
                    </div>
                  )}
                </div>

                {/* Fixed height container for main text - ALL ITEMS SAME HEIGHT */}
                <div className="h-7 sm:h-8 flex items-center justify-center">
                  <div
                    className={`
                      text-lg sm:xl:text-3xl
                      ${
                        item.id === "downloads"
                          ? "relative top-3 sm:top-5 lg:top-5"
                          : ""
                      }
                      ${item.mainTextColor} font-bold leading-none
                    `}
                  >
                    {item.mainText}
                  </div>
                </div>

                {/* Fixed height container for subtitles - ALL ITEMS SAME HEIGHT */}
                <div className="h-5 sm:h-6 flex items-center justify-center">
                  {item.subtitle && (
                    <div
                      className={`${i18n.language==='ta'?"text-sm sm:xl:text-[15px]":" sm:xl:text-[20px] "}
                      text-base font-bold  leading-none top-2 relative  
                      ${item.id === "downloads" ? "text-[#D6336C]" : ""}
                    `}
                    >
                      {item.subtitle}
                    </div>
                  )}
                </div>

                {/* Fixed height container for titles - ALL ITEMS SAME HEIGHT */}
                <div className="h-7 sm:h-8 flex items-center justify-center">
                  <div className="text-gray-600 font-medium text-center text-sm xl:text-[14px] leading-tight top-2 relative  ">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
