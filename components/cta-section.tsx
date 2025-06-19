import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="py-12" style={{ background: "linear-gradient(135deg, #2563EB 0%, #153885 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center text-white">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg opacity-90">
                Download Shopbook now and start implementing what you've learned to get paid faster.
              </p>
            </div>

            {/* App download buttons */}
            <div className="flex gap-4">
              <Button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800">
                <Image src="/placeholder.svg?height=20&width=20" alt="Google Play" width={20} height={20} />
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="font-semibold text-sm">Google Play</div>
                </div>
              </Button>
              <Button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800">
                <Image src="/placeholder.svg?height=20&width=20" alt="App Store" width={20} height={20} />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right content - Mobile mockups and logo */}
          <div className="flex justify-end items-center space-x-6">
            {/* Phone mockups side by side */}
            <div className="flex space-x-4">
              {/* Left phone - Invoice Book */}
              <div className="relative">
                <Image
                  src="/images/mobile-invoice-book.png"
                  alt="Shopbook Invoice Book interface"
                  width={180}
                  height={360}
                  className="rounded-[1.5rem] shadow-xl"
                />
              </div>

              {/* Right phone - Create Invoice */}
              <div className="relative">
                <Image
                  src="/images/mobile-create-invoice.png"
                  alt="Shopbook Create Invoice interface"
                  width={180}
                  height={360}
                  className="rounded-[1.5rem] shadow-xl"
                />
              </div>
            </div>

            {/* Shopbook logo */}
            <div className="flex items-center space-x-2 ml-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm font-bold">📋</span>
              </div>
              <span className="text-xl font-bold text-white">Shopbook</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
