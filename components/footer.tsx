"use client"; // Important for using client-side hooks like useTranslation

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next"; // Import useTranslation

export function Footer() {
  const { t,i18n } = useTranslation(); // Initialize useTranslation

  // Define socialMediaIcons inside the component to use `t` for alt text
  const socialMediaIcons = [
    {
      src: "/images/social/facebook-icon.png",
      altKey: "footerSection.social_facebook_alt", // Use altKey for translation
      href: "https://web.facebook.com/profile.php?id=100078686576791",
    },
    {
      src: "/images/social/instagram-icon.png",
      altKey: "footerSection.social_instagram_alt", // Use altKey for translation
      href: "https://www.instagram.com/shopbook.lk/",
    },
    {
      src: "/images/social/whatsapp-icon.png",
      altKey: "footerSection.social_whatsapp_alt", // Use altKey for translation
      href: "https://wa.me/94782470168", // Corrected WhatsApp link if it was `wa.me782470168`
    },
    {
      src: "/images/social/youtube-icon.png",
      altKey: "footerSection.social_youtube_alt", // Use altKey for translation
      href: "https://www.youtube.com/@ShopbookApp", // Corrected YouTube link if it was `googleusercontent.com/youtube.com/10`
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-end relative">
          {/* Logo and description */}
          <div className="space-y-4 col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/images/shopbook-logo.png"
                alt="Shopbook Logo" // This can remain static if the logo name doesn't change per language
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm">
              {t('footerSection.description')} {/* Translated */}
            </p>
            <div className="flex space-x-4">
              {socialMediaIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 cursor-pointer border border-gray-100 flex items-center justify-center bg-blue-600 bg-opacity-10"
                  style={{
                    width: "46px",
                    height: "46px",
                    borderWidth: "1px",
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    src={icon.src || "/placeholder.svg"}
                    alt={t(icon.altKey)} // Use translated alt text
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4 relative lg:left-20">
            <h3 className="font-semibold text-gray-900">
              {t('footerSection.get_in_touch_title')} {/* Translated */}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📞 +94 77 123 4567</p> {/* Phone number might be static */}
              <p>
                📍 {t('footerSection.address_line1')} {/* Translated */}
              </p>
            </div>
          </div>

          {/* Download App */}
          <div className={`space-y-4 flex flex-col items-start sm:items-end `}>
            <h3 className={`font-semibold text-gray-900 relative ${i18n.language==="si" ? "relative lg:right-5":"lg:right-10 "}`}>
              {t('footerSection.download_app_title')} {/* Translated */}
            </h3>
            <div className="space-y-4 w-full sm:w-auto">
              <a
                href="https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/images/cta/google-play.png"
                  alt={t('footerSection.google_play_alt')} // Translated
                  width={160}
                  height={57}
                  className="h-auto w-full sm:w-auto mb-5 max-w-[160px]"
                  style={{
                    width: "160.48104858398438px",
                    height: "57.04402542114258px",
                  }}
                />
              </a>
              <a
                href="https://apps.apple.com/lk/app/shopbook/id1602633267"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/images/cta/app-store.png"
                  alt={t('footerSection.app_store_alt')} // Translated
                  width={161}
                  height={57}
                  className="h-auto w-full sm:w-auto max-w-[160px]"
                  style={{
                    width: "160.48104858398438px",
                    height: "57.04402542114258px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <p className="text-sm text-gray-600">
              {t('footerSection.copyright_text', { year: new Date().getFullYear() })} {/* Translated with year */}
            </p>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
              {t('footerSection.privacy_policy')} {/* Translated */}
            </Link>
          </div>
          <div className="flex items-center text-[14px]">
            <span className="flex items-center space-x-2">
              <span>{t('footerSection.made_in_text_part1')}</span> {/* Translated */}
              <span className="inline-block align-middle" style={{ width: 24, height: 16, position: "relative" }}>
                <Image
                  src="/images/world-flag.png"
                  alt="Sri Lankan Flag" // This can remain static
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-sm"
                  sizes="24px"
                  priority
                />
              </span>
              <span>{t('footerSection.made_in_text_part2')}</span> {/* Translated */}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}