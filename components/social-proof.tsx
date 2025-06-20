import { Star } from "lucide-react"
import Image from "next/image"

export function SocialProof() {
  const socialProofData = [
    {
      id: "downloads",
      icon: "avatars",
      subtitle: "15K+",
      mainTextColor: "text-pink-600",
      title: "Downloads",
      hasAvatars: true,
    },
    {
      id: "rating",
      icon: "stars",
    
      mainTextColor: "text-gray-900",
       subtitle: "4.5 Rating",
      title: "App Store & Google Play",
      hasStars: true,
    },
    {
      id: "security",
      icon: "none",
      mainText: "100%",
      mainTextColor: "text-green-600",
      subtitle: "Safe & Secure",
      title: "Your data is protected",
    },
    {
      id: "languages",
      icon: "none",
      mainText: "3",
      mainTextColor: "text-orange-600",
      subtitle: "Languages",
      title: "English, Sinhala, Tamil",
    },
  ]

  return (
    <section className="py-0 bg-white">
      {/* Full width background */}
      <div className="w-full bg-[#F2F6FE] py-8 md:py-10 lg:h-[137px] lg:absolute lg:top-[605px] lg:left-[1px] relative flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 text-center">
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
                      src="/images/user-avatars.png"
                      alt="User avatars"
                      width={100}
                      height={35}
                      className="h-7 w-auto align-baseline"
                      style={{ verticalAlign: "baseline" }}
                    />
                  )}
                  {item.hasStars && (
                    <div className="flex justify-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-7 fill-yellow-400 text-yellow-400 relative sm:top-1" />
                      ))}
                      <Star className="w-4 h-7 fill-yellow-400 text-yellow-400 opacity-50  relative sm:top-1" />
                    </div>
                  )}
                </div>

                {/* Fixed height container for main text - ALL ITEMS SAME HEIGHT */}
                <div className="h-7 sm:h-8 flex items-center justify-center">
                  <div
                    className={`
                      text-lg sm:xl:text-2xl
                      ${item.id === "downloads" ? "relative top-3 sm:top-5 lg:top-5" : ""}
                      ${item.mainTextColor} font-bold leading-none
                    `}
                  >
                    {item.mainText}
                  </div>
                </div>

                {/* Fixed height container for subtitles - ALL ITEMS SAME HEIGHT */}
                <div className="h-5 sm:h-6 flex items-center justify-center">
                  {item.subtitle && (
                    <div className={`
                      text-base sm:xl:text-[24px] font-bold  leading-none 
                      ${item.id === "rating" ? "relative sm:xl:text-2xl" : item.id === "downloads" ?"text-[#D6336C]":""}
                    `}>
                      {item.subtitle}
                    </div>
                  )}
                </div>

                {/* Fixed height container for titles - ALL ITEMS SAME HEIGHT */}
                <div className="h-7 sm:h-8 flex items-center justify-center">
                  <div className="text-gray-600 font-medium text-center text-xs sm:text-sm xl:text-lg leading-tight">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}