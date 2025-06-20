import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
                Simplify Your
                <br />
                <span className="text-blue-600">Business Invoicing</span>
                <br />
                {"& "}
                <span className="text-blue-600">Get Paid On Time</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Create professional invoices, track payments and send professional automated reminders to collect credit
                3x faster.
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
                <a href="https://apps.apple.com/lk/app/shopbook/id1602633267" target="_blank" rel="noopener noreferrer">
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
              <div className="inline-block">
                <Image
                  src="/images/ui/free-label.png"
                  alt="100% Free • No Credit Card Required"
                  width={300}
                  height={40}
                  className="h-auto"
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
  )
}
