import { X, Check } from "lucide-react"

const manualProcessItems = [
  "Time-consuming invoice creation",
  "Forgetting who's due today",
  "Lost invoices and poor record keeping",
  "Delayed payments causing cash flow issues",
]

const shopbookItems = [
  "Create invoices in seconds",
  "Automated payment reminders via WhatsApp/SMS",
  "Complete invoice history and detailed reports",
  "Get paid up to 3x faster",
]

export function ComparisonSection() {
  return (
    <section className="py-20 bg-[#F2F6FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            See why thousands of businesses have switched to Shopbook
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Manual Process */}
          <div className="bg-white rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Manual Process</h3>
            <div className="space-y-4">
              {manualProcessItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With Shopbook */}
          <div className="bg-white rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-600 mb-6">With Shopbook</h3>
            <div className="space-y-4">
              {shopbookItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
