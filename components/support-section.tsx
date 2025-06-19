import { Phone, LucideMessageCircleMore, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function SupportSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center mb-8 sm:mb-12 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-[#23272E]">
          We&apos;re Here to Help You Succeed
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#8B8B8B] max-w-xl mx-auto">
          Our dedicated support team is committed to helping you get the most
          out of Shopbook.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col items-start gap-6 md:gap-10 lg:gap-12">
        <div className="w-full border border-[#FFEEE1] rounded-3xl bg-[#FFFBF7] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-8 mx-2 sm:mx-6 md:mx-10 lg:mx-14">
            <Card className="flex-1 min-w-[220px] sm:min-w-[260px] flex flex-col items-center py-4 sm:py-6 px-2 sm:px-4 bg-white border border-[#ECEAE8] shadow-sm rounded-xl">
              <span className="font-semibold text-sm sm:text-base text-[#23272E] mb-2">
                0777 391 860
              </span>
              <Button
                className="bg-[#FB923C] hover:bg-[#FF9800] text-white font-medium rounded-md mt-2 flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-4"
                size="sm"
              >
                <Phone className="w-4 h-5" /> Give us a call
              </Button>
            </Card>
            <Card className="flex-1 min-w-[220px] sm:min-w-[260px] flex flex-col items-center py-4 sm:py-6 px-2 sm:px-4 bg-white border border-[#ECEAE8] shadow-sm rounded-xl">
              <span className="font-semibold text-sm sm:text-base text-[#23272E] mb-2">
                0777 391 860
              </span>
              <Button
                className="bg-[#FFF] border-[#FFA94D] hover:bg-[#FFFBF7] hover:text-[#FFA94D] text-[#FB923C] font-medium rounded-md mt-2 flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-4"
                size="sm"
                variant="outline"
              >
                <LucideMessageCircleMore className="w-4 h-5" /> Chat with Us
              </Button>
            </Card>
            <Card className="flex-1 min-w-[220px] sm:min-w-[260px] flex flex-col items-center py-4 sm:py-6 px-2 sm:px-4 bg-white border border-[#ECEAE8] shadow-sm rounded-xl">
              <span className="font-semibold text-sm sm:text-base text-[#23272E] mb-2">
                WhatsApp Community
              </span>
              <Button
                className="bg-[#FFF] border-[#FFA94D] hover:bg-[#FFFBF7] hover:text-[#FFA94D] text-[#FFA94D] font-medium rounded-md mt-2 flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-4"
                size="sm"
                variant="outline"
              >
                <Users className="w-4 h-5" /> Join Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
