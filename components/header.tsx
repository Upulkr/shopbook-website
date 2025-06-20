"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, ChevronUp, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [os, setOS] = useState("");

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
    switch(os){
      case "Windows":
        window.open("https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US", "_blank");
        break;
      case "macOS":
        window.open("https://apps.apple.com/lk/app/shopbook/id1602633267", "_blank");
      case "Android":
        window.open("https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US", "_blank");
        break;
      case "iOS":
        window.open("https://apps.apple.com/lk/app/shopbook/id1602633267", "_blank");
        break;
      default:
        window.open("https://play.google.com/store/apps/details?id=com.mithushancj.shopbook&hl=en&gl=US", "_blank");
        break;
    }
  }
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/shopbook-logo.png"
              alt="Shopbook Logo"
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
                className={`font-medium hover:text-blue-700 ${
                  pathname === "/" ? "text-blue-600" : "text-gray-600"
                }`}
              >
                Home
              </Link>
              <Link
                href="/learn"
                className={`hover:text-blue-600 ${
                  pathname === "/learn"
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                Learn
              </Link>
              <Link
                href="/contact"
                className={`hover:text-blue-600 ${
                  pathname === "/contact"
                    ? "text-blue-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                Contact Us
              </Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium" onClick={handleDownloadApp}>
              Download Now
            </Button>
            <div className="relative" >
              <button
                className={`
                  flex items-center space-x-2 px-3 py-2 
                  text-gray-700 hover:text-blue-600 transition
                  font-medium 
                  
                `}
                onClick={() => setIsLanguageMenuOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={isLanguageMenuOpen}
              >
                <span className="mr-1 w-16">{currentLanguage}</span>
                {isLanguageMenuOpen ? (
                  <ChevronUp className="w-4 h-4 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform" />
                )}
              </button>
              {isLanguageMenuOpen && (
                <>
                  {/* Overlay to catch outside clicks */}
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
                    {["English", "සිංහල", "தமிழ்"].map((language) => (
                      <button
                        key={language}
                        onClick={() => {
                          setCurrentLanguage(language);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`
                          w-full text-left px-4 py-2
                          hover:bg-blue-50 hover:text-blue-700
                          text-gray-700 transition
                          ${currentLanguage === language ? "bg-blue-50 text-blue-700 font-semibold" : ""}
                          rounded-md
                        `}
                        role="option"
                        aria-selected={currentLanguage === language}
                      >
                        {language}
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
          <div
            className="fixed inset-0 z-50"
            style={{}}
            aria-modal="true"
            role="dialog"
          >
            {/* Overlay to catch outside clicks */}
            <div
              className="absolute inset-0 bg-black bg-opacity-0"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={-1}
            />
            {/* Mobile menu content */}
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
                    Home
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
                    Learn
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
                    Contact Us
                  </Link>
                </nav>
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-32">
                    Download Now
                  </Button>
                  <div className="flex items-center justify-between w-32">
                    <label htmlFor="mobile-language-select" className="sr-only">
                      Language
                    </label>
                    <select
                      id="mobile-language-select"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="en"
                      aria-label="Select language"
                    >
                      <option value="en">English</option>
                      <option value="si">සිංහල</option>
                      <option value="ta">தமிழ்</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
