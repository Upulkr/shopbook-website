"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-white py-10 md:py-20 relative top-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className={` font-bold text-gray-900 leading-relaxed ${
                  i18n.language === "si" || i18n.language === "ta"
                    ? "text-2xl sm:text-3xl"
                    : "text-4xl lg:text-5xl"
                } tracking-tight`}
                style={{
                  lineHeight: "1.3",
                }}
              >
                {t("hero_simplify")}
                <br />
                <span className="text-blue-600">
                  {t("hero_business_invoicing")}
                </span>
                <br />
                {t("&")}
                <span className="text-blue-600">
                  {t("hero_get_paid_on_time")}
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                {t("invoice_feature")}
              </p>
            </div>
            {/* App download buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/cta/google-play.png"
                    alt="Get it on Google Play"
                    width={150}
                    height={45}
                    className="h-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/lk/app/shopbook/id1602633267"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/cta/app-store.png"
                    alt="Download from App Store"
                    width={150}
                    height={45}
                    className="h-auto"
                  />
                </a>
              </div>

              {/* Free label */}
              <div className={`inline-block ${i18n.language==='ta'||i18n.language==='si'?"lg:-[50px] relative ":""}`}>
                <Image
                  src="/images/ui/free-label.png"
                  alt="100% Free • No Credit Card Required"
                  width={300}
                  height={40}
                  className={`h-auto ${i18n.language==='ta'||i18n.language==='si'?"lg:-[50px] relative lg:mt-5":""}`}
                />
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative flex justify-center">
            <Image
              src="/images/hero/hero-main.png"
              alt="Happy business owner using Shopbook app with money"
              width={600}
              height={500}
              className="w-full h-auto max-w-lg rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
