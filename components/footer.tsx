import Link from "next/link"
import Image from "next/image"

const socialMediaIcons = [
  {
    src: "/images/social/facebook-icon.png",
    alt: "Facebook",
    href: "https://facebook.com/shopbook",
  },
  {
    src: "/images/social/instagram-icon.png",
    alt: "Instagram",
    href: "https://instagram.com/shopbook",
  },
  {
    src: "/images/social/whatsapp-icon.png",
    alt: "WhatsApp",
    href: "https://wa.me/94771234567",
  },
  {
    src: "/images/social/youtube-icon.png",
    alt: "YouTube",
    href: "https://youtube.com/@shopbook",
  },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-end relative">
          {/* Logo and description */}
          <div className="space-y-4 col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/images/shopbook-logo.png"
                alt="Shopbook Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm">
              All-in-one business management solution for small and medium businesses. Create invoices, track payments,
              and grow your business.
            </p>
            <div className="flex space-x-4">
              {socialMediaIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 cursor-pointer border border-gray-100 flex items-center justify-center"
                  style={{
                    width: "46px",
                    height: "46px",
                    borderWidth: "1px",
                    borderRadius: "5px",
                    backgroundColor: "#2563EB3D",
                  }}
                >
                  <Image
                    src={icon.src || "/placeholder.svg"}
                    alt={icon.alt}
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
            <h3 className="font-semibold text-gray-900">Get in Touch</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 info@shopbook.lk</p>
              <p>📞 +94 77 123 4567</p>
              <p>📍 Millennium Tower (Kelly Felder Building), 2nd Floor, 345 Galle Rd, Colombo 00300, Sri Lanka.</p>
            </div>
          </div>

          {/* Download App */}
          <div className="space-y-4 flex flex-col items-start sm:items-end">
            <h3 className="font-semibold text-gray-900 relative lg:right-10">Download App</h3>
            <div className="space-y-4 w-full sm:w-auto">
              <a
                href="https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/images/cta/google-play.png"
                  alt="Get it on Google Play"
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
                  alt="Download from App Store"
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
            <p className="text-sm text-gray-600">© 2024 Shopbook. All rights reserved.</p>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center text-[14px]">
            <span className="flex items-center space-x-2">
              <span>Made in</span>
              <span className="inline-block align-middle" style={{ width: 24, height: 16, position: "relative" }}>
                <Image
                  src="/images/world-flag.png"
                  alt="Sri Lankan Flag"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-sm"
                  sizes="24px"
                  priority
                />
              </span>
              <span>with ❤️</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
