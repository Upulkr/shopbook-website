import { Card, CardContent } from "@/components/ui/card"
import { FileText, TrendingUp, CreditCard, BarChart3, RefreshCw, Globe } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Credit & Cash Invoices Made Easy",
    description: "Manage all your credit and cash sales invoices in one place.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Access Your Full Invoice History",
    description: "View and search all past invoices anytime.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: CreditCard,
    title: "Faster Payments with Automated Reminders",
    description: "Automatically remind customers via SMS/WhatsApp for quicker payment collection.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Effortless Payment Tracking",
    description: "Quickly record received payments and update your accounts instantly.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: RefreshCw,
    title: "Generate & Share Reports",
    description: "Create professional sales and payment reports with ease.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Globe,
    title: "Available in 3 Languages",
    description: "Use Shopbook in Sinhala, Tamil, or English.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 lg:px-8">
        <div className="text-center space-y-4 mb-16 mt-12 pt-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Achieve Your Business Goals With Shopbook</h2>
          <p className="text-lg text-gray-600">From Invoices to Payment - Simplified for You</p>
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
                    <h3 className="text-xl font-semibold text-gray-900 leading-tight">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    <div className="relative mt-12 top-10">
  {/* Background container with centered content */}
  <div
    className="relative border border-gray-200 rounded-2xl overflow-hidden max-w-7xl mx-auto p-6 lg:h-[194px] top-5"
    style={{ backgroundColor: "#FB923C0A" }}
  >
    {/* Mobile phone image - Only visible on mobile, positioned above content */}
    <div className="md:hidden flex justify-center mb-4">
      <img 
        src="/images/phone-secure.png" 
        alt="Shopbook mobile app" 
        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]" 
      />
    </div>

    <div className="text-center space-y-4 max-w-md mx-auto">
      <h3 
        className="text-lg font-semibold text-gray-900 leading-none md:text-xl sm:text-base" 
        style={{ fontFamily: "Sora" }}
      >
        See Automated Reminders in Action
      </h3>
      <p
        className="text-base font-normal text-gray-600 leading-none text-center md:text-md sm:text-sm"
        style={{ fontFamily: "Sora" }}
      >
        Watch how ShopBook effortlessly sends professional payment reminders to help you collect faster and
        reduce unpaid credit.
      </p>
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors w-full max-w-[188px] lg-h-[40px] px-4 py-2 mx-auto block sm:w-auto text-nowrap"
        style={{
          borderRadius: "8px",
        }}
      >
        Watch Demo Video
      </button>
    </div>

    {/* Mobile hand with cash image - Only visible on mobile, positioned below button */}
    <div className="md:hidden flex justify-center mt-4">
      <img 
        src="/images/money-hand.png" 
        alt="Money in hand" 
        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]" 
      />
    </div>
  </div>
  
  {/* Desktop/Tablet layout - Absolutely positioned images */}
  <div className="hidden md:block">
    <div className="absolute inset-y-0 left-0 flex items-center z-10">
      <div className="flex-shrink-0">
        <img 
          src="/images/phone-secure.png" 
          alt="Shopbook mobile app" 
          className="lg:w-[236px] lg:h-[236px] md:w-[180px] md:h-[180px]" 
        />
      </div>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center z-10">
      <div className="flex-shrink-0">
        <img 
          src="/images/money-hand.png" 
          alt="Money in hand" 
          className="lg:w-[236px] lg:h-[236px] md:w-[180px] md:h-[180px]" 
        />
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}
