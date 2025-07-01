import React from "react";
import { Card } from "./ui/card";

import { LucideMessageCircleMore, Phone, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const NeedMoreHelp = () => {
  const { t } = useTranslation();
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col items-start gap-6 md:gap-10 lg:gap-12">
        <div className="w-full border border-[#FFEEE1] rounded-3xl bg-[#FFFBF7] shadow-sm p-4">
          <div className="max-w-5xl mx-auto px-4 text-center mb-8 sm:mb-12 md:mb-10 relative top-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-[#23272E]">
              {t("needMoreHelpSection.main_title")} {/* Translated */}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#8B8B8B] max-w-xl mx-auto relative top-2">
              {t("needMoreHelpSection.main_subtitle")} {/* Translated */}
            </p>
          </div>
          {/* Responsive: 1 col on mobile, 2 on md, 3 on lg+, xl+ unchanged */}
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-8 mx-2 sm:mx-6 md:mx-10 lg:mx-14">
            <Card className="flex-1 min-w-[180px] sm:min-w-[220px] md:min-w-[200px] lg:min-w-[260px] flex flex-col items-center py-4 sm:py-6 px-2 sm:px-4 bg-white border border-[#ECEAE8] shadow-sm rounded-xl mb-4 md:mb-0">
              <span className="font-semibold text-sm sm:text-base text-[#23272E] mb-2">
                0782 470 168
              </span>

              <a
                href="tel:0782470168"
                className="w-full md:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-[#FB923C] hover:bg-[#FF9800] text-white font-medium rounded-md mt-2 flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-4 w-full md:w-auto"
                  size="sm"
                >
                  <Phone className="w-4 h-5" />{" "}
                  {t("needMoreHelpSection.call_us_button")} {/* Translated */}
                </Button>
              </a>
            </Card>
            <Card className="flex-1 min-w-[180px] sm:min-w-[220px] md:min-w-[200px] lg:min-w-[260px] flex flex-col items-center py-4 sm:py-6 px-2 sm:px-4 bg-white border border-[#ECEAE8] shadow-sm rounded-xl mb-4 md:mb-0">
              <span className="font-semibold text-sm sm:text-base text-[#23272E] mb-2">
                0782 470 168
              </span>
              <a
                href="https://wa.me/94782470168"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button
                  className="bg-[#FFF] border-[#FFA94D] hover:bg-[#FFFBF7] hover:text-[#FFA94D] text-[#FB923C] font-medium rounded-md mt-2 flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-4 w-full md:w-auto"
                  size="sm"
                  variant="outline"
                >
                  <LucideMessageCircleMore className="w-4 h-5" />{" "}
                  {t("needMoreHelpSection.chat_with_us_button")}{" "}
                  {/* Translated */}
                </Button>
              </a>
            </Card>
            <Card className="flex-1 min-w-[180px] sm:min-w-[220px] md:min-w-[200px] lg:min-w-[260px] flex flex-col items-center py-4 sm:py-6 px-2 sm:px-4 bg-white border border-[#ECEAE8] shadow-sm rounded-xl">
              <span className="font-semibold text-sm sm:text-base text-[#23272E] mb-2">
                {t("needMoreHelpSection.whatsapp_community_title")}{" "}
                {/* Translated */}
              </span>
              <a
                href="https://chat.whatsapp.com/EXAMPLE" // Replace with actual WhatsApp group link
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                
                <Button
                  className="bg-[#FFF] border-[#FFA94D] hover:bg-[#FFFBF7] hover:text-[#FFA94D] text-[#FFA94D] font-medium rounded-md mt-2 flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-4 w-full md:w-auto"
                  size="sm"
                  variant="outline"
                >
                  <Users className="w-4 h-5" />{" "}
                  {t("needMoreHelpSection.join_now_button")} {/* Translated */}
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedMoreHelp;
