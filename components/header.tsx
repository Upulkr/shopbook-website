"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const [os, setOS] = useState("");

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang && ["en", "si", "ta"].includes(savedLang)) {
      i18n.changeLanguage(savedLang);
      setSelectedLang(savedLang);
    }
    console.log(i18n.language);
  }, [i18n]);

  // Save language to localStorage when changed
  const changeLanguage = (lang: string) => {
    if (["en", "si", "ta"].includes(lang)) {
      i18n.changeLanguage(lang);
      setSelectedLang(lang);
      localStorage.setItem("i18nextLng", lang);
    }
  };

  // Determine OS for download link (simplified, no state needed)
  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    if (/Windows NT/.test(userAgent)) {
      setOS("Windows");
    } else if (/Mac OS X/.test(userAgent)) {
      setOS("macOS");
    } else if (/Android/.test(userAgent)) {
      setOS("Android");
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
      setOS("iOS");
    } else {
      setOS("Unknown OS");
    }
  }, []);

  const handleDownloadApp = () => {
    switch (os) {
      case "Windows":
        window.open(
          "https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US",
          "_blank"
        );
        break;
      case "macOS":
        window.open(
          "https://apps.apple.com/lk/app/shopbook/id1602633267",
          "_blank"
        );
      case "Android":
        window.open(
          "https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US",
          "_blank"
        );
        break;
      case "iOS":
        window.open(
          "https://apps.apple.com/lk/app/shopbook/id1602633267",
          "_blank"
        );
        break;
      default:
        window.open(
          "https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US",
          "_blank"
        );
        break;
    }
  };

  // Map language codes to display names
  const languageMap: { [key: string]: string } = {
    en: "English",
    si: "සිංහල",
    ta: "தமிழ்",
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/shopbook-logo.png"
              alt={t("headerSection.logo_alt")} // Translated
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                href="/"
                className={`hover:text-blue-700 ${
                  pathname === "/"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {t("headerSection.nav_home")} 
              </Link>
              <Link
                href="/learn"
                className={`hover:text-blue-600 ${
                  pathname === "/learn"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {t("headerSection.nav_learn")} 
              </Link>
              <Link
                href="/contact"
                className={`hover:text-blue-600 ${
                  pathname === "/contact"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {t("headerSection.nav_contact_us")} 
              </Link>
            </nav>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              onClick={handleDownloadApp}
            >
              {t("headerSection.download_button")} 
            </Button>
            <div className="relative">
              <button
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsLanguageMenuOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={isLanguageMenuOpen}
              >
                <span className="mr-1 w-16">{languageMap[selectedLang]}</span>
                {isLanguageMenuOpen ? (
                  <ChevronUp className="w-4 h-4 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform" />
                )}
              </button>
              {isLanguageMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLanguageMenuOpen(false)}
                    tabIndex={-1}
                  />
                  <div
                    className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fade-in"
                    tabIndex={-1}
                    role="listbox"
                  >
                    {Object.entries(languageMap).map(([code, name]) => (
                      <button
                        key={code}
                        onClick={() => {
                          changeLanguage(code);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`
                          w-full text-left px-4 py-2
                          hover:bg-blue-50 hover:text-blue-700
                          transition rounded-md
                          ${selectedLang === code ? "bg-blue-100" : ""}
                        `}
                        role="option"
                        aria-selected={selectedLang === code}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={-1}
            />
            <div className="absolute top-0 left-0 w-full lg:hidden border-t border-gray-100 bg-white z-50">
              <div className="px-4 py-4 space-y-4">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className={`hover:text-blue-700 py-2 ${
                      pathname === "/"
                        ? "text-blue-600 font-medium"
                        : "text-gray-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("headerSection.nav_home")} 
                  </Link>
                  <Link
                    href="/learn"
                    className={`hover:text-blue-600 py-2 ${
                      pathname === "/learn"
                        ? "text-blue-600 font-medium"
                        : "text-gray-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("headerSection.nav_learn")} 
                  </Link>
                  <Link
                    href="/contact"
                    className={`hover:text-blue-600 py-2 ${
                      pathname === "/contact"
                        ? "text-blue-600 font-medium"
                        : "text-gray-600"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("headerSection.nav_contact_us")} 
                  </Link>
                </nav>
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-48 "
                    onClick={handleDownloadApp}
                  >
                    {t("headerSection.download_button")} 
                  </Button>
                  <select
                    value={selectedLang}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={
                      t("headerSection.lang_select_aria_label") ||
                      "Select language"
                    } // Added a new translation key for aria-label
                  >
                    {/* Render options from languageMap using translated names */}
                    {Object.entries(languageMap).map(([code, name]) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
