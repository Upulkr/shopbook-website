"use client"; // Ensure this is at the top of the file
import { Card, CardContent } from "@/components/ui/card";
import { FileText, TrendingUp, CreditCard, BarChart3, RefreshCw, Globe } from "lucide-react";
import { useTranslation } from "react-i18next"; // Import useTranslation

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

export function FeaturesSection() {
  const { t , i18n} = useTranslation(); // Initialize useTranslation

  return (
    <section className={`py-24 bg-white  `}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8 ${i18n.language==="si" ?"lg:top-[270px]  xl:top-32 relative":i18n.language==="ta" ? "lg:top-[290px] xl:top-16 relative" : "lg:top-12 relative"}`}>
        <div className="text-center space-y-4 mb-16 mt-12 pt-8">
          <h2 className="sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-gray-900">
            {t('featuresSection.main_heading_title')}
          </h2>
          <p className="sm:text-lg md:text-xl text-gray-600">
            {t('featuresSection.main_heading_subtitle')}
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

        <div className={`relative mt-12 top-10 ${i18n.language==="si" ? "lg:mb-32":""}`}>
          {/* Background container with centered content */}
          <div
            className={`relative border border-gray-200 rounded-2xl overflow-hidden max-w-7xl mx-auto p-6  top-5 ${i18n.language==="ta" ? "lg:h-[200px]" :i18n.language==="si"? "lg:h-[200px]" : "lg:h-[194px]"}`}
            style={{ backgroundColor: "#FB923C0A" }}
          >
            {/* Mobile phone image - Only visible on mobile, positioned above content */}
            <div className="md:hidden flex justify-center mb-4">
              <img
                src="/images/features/phone-secure.png"
                alt={t('featuresSection.phone_secure_alt')} 
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
              />
            </div>

            <div className={`text-center  max-w-2xl mx-auto ${i18n.language==="ta" ? "space-y-1":"space-y-4"}`}>
              <h3
                className="text-lg font-semibold text-gray-900 leading-none md:text-xl sm:text-base"
                style={{ fontFamily: "Sora" }}
              >
                {t('featuresSection.nested_cta_title')} 
              </h3>
              <p
                className="text-base font-normal text-gray-600 leading-none text-center md:text-md sm:text-sm"
                style={{ fontFamily: "Sora" }}
              >
                {t('featuresSection.nested_cta_description')}
              </p>
              <button
                className={`bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors  lg-h-[40px] px-4 py-2 mx-auto block sm:w-auto text-nowrap ${i18n.language==="ta"||i18n.language==="si" ? "w-full max-w-[315px]" :"w-full max-w-[188px]"}`}
                style={{
                  borderRadius: "8px",
                }}
              >
                {t('featuresSection.nested_cta_button')}
              </button>
            </div>

            {/* Mobile hand with cash image - Only visible on mobile, positioned below button */}
            <div className="md:hidden flex justify-center mt-4">
              <img
                src="/images/features/money-hand.png"
                alt={t('featuresSection.money_hand_alt')}
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]"
              />
            </div>
          </div>

          {/* Desktop/Tablet layout - Absolutely positioned images */}
          <div className="hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center z-10">
              <div className="flex-shrink-0">
                <img
                  src="/images/features/phone-secure.png"
                  alt={t('featuresSection.phone_secure_alt')}
                  className="lg:w-[236px] lg:h-[236px] md:w-[180px] md:h-[180px]"
                />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <div className="flex-shrink-0">
                <img
                  src="/images/features/money-hand.png"
                  alt={t('featuresSection.money_hand_alt')}
                  className="lg:w-[236px] lg:h-[236px] md:w-[180px] md:h-[180px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}