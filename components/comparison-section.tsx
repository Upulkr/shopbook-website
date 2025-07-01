"use client"
import { X, Check } from "lucide-react"
import { useTranslation } from "react-i18next" // Import useTranslation

export function ComparisonSection() {
  const { t , i18n} = useTranslation(); // Initialize useTranslation

  const manualProcessItems = [
    "comparison.manual_process_item1", // Use keys for translation
    "comparison.manual_process_item2",
    "comparison.manual_process_item3",
    "comparison.manual_process_item4",
  ]

  const shopbookItems = [
    "comparison.shopbook_item1", // Use keys for translation
    "comparison.shopbook_item2",
    "comparison.shopbook_item3",
    "comparison.shopbook_item4",
  ]

  return (
    <section className="py-20 bg-[#F2F6FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
        <h2
  className={`${
    i18n.language === "ta" || i18n.language === "si" ? "text-xl lg:text-[32px]" : "text-2xl"
  } sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-gray-900 mb-10 text-center leading-[1.7] lg:leading-none`}
>
 
            {t('comparison.title')} {/* Translate the main title */}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Manual Process */}
          <div className="bg-white rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('comparison.manual_process_heading')} {/* Translate heading */}
            </h3>
            <div className="space-y-4">
              {manualProcessItems.map((itemKey, index) => ( // Iterate over keys
                <div key={index} className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t(itemKey)}</span> {/* Translate item */}
                </div>
              ))}
            </div>
          </div>

          {/* With Shopbook */}
          <div className="bg-white rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-600 mb-6">
              {t('comparison.shopbook_heading')} {/* Translate heading */}
            </h3>
            <div className="space-y-4">
              {shopbookItems.map((itemKey, index) => ( // Iterate over keys
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{t(itemKey)}</span> {/* Translate item */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}