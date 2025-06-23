'"use client"'
import Image from "next/image"
import { useTranslation } from "react-i18next";

export function CTASection() {
  const { t } = useTranslation();
  return (
    <section
      className="py-12 lg:py-0"
      style={{
        background: "linear-gradient(135deg, #153885 0%, #2563EB 100%)",
        border: "1px solid #2563EB",
      }}
    >
      <div className="max-w-7xl flex flex-row mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center text-white">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-3 mb-8">
              <h2 className="text-3xl lg:text-3xl font-bold">{t('cta.title')}</h2>
              <p className="text-lg text-[#94A7CF]">
                {t('cta.description')}
              </p>
            </div>

            {/* App download buttons */}
            <div className="flex gap-4 items-center">
              <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              > <Image src="/images/cta/google-play.png" alt="Google Play" width={150} height={45} priority /></a>
               
                
              </div>

              <div>
              <a
                href="https://apps.apple.com/lk/app/shopbook/id1602633267"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >   <Image src="/images/cta/app-store.png" alt="App Store" width={150} height={45} priority /></a>
            
              </div>
            </div>
          </div>

          {/* Right content - Mobile mockups and logo */}
          <div className="hidden lg:flex justify-end min-h-[327px]">
            {/* Phone mockups side by side */}
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-4">
                {/* Left phone - Invoice Book */}
                <div className="self-end">
                  <Image
                    src="/images/cta/iMockup-1.png"
                    alt="Shopbook Create Invoice interface"
                    width={180}
                    height={360}
                    priority
                  />
                </div>

                {/* Right phone - Create Invoice */}
                <div className="self-start">
                  <Image
                    src="/images/cta/iMockup-2.png"
                    alt="Shopbook Create Invoice interface"
                    width={180}
                    height={360}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shopbook logo */}
        <div className="absolute right-0 self-end pr-4 lg:pb-4 hidden md:block">
          <Image src="/images/cta/logo-icon.png" alt="Shopbook Logo" width={80} height={80} priority />
        </div>
      </div>
    </section>
  )
}
