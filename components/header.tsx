"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/shopbook-logo.png" alt="Shopbook Logo" width={120} height={32} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium hover:text-blue-700 ${pathname === "/" ? "text-blue-600" : "text-gray-600"}`}
              >
                Home
              </Link>
              <Link
                href="/learn"
                className={`hover:text-blue-600 ${
                  pathname === "/learn" ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
              >
                Learn
              </Link>
              <Link
                href="/contact"
                className={`hover:text-blue-600 ${
                  pathname === "/contact" ? "text-blue-600 font-medium" : "text-gray-600"
                }`}
              >
                Contact Us
              </Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
              Download Now
            </Button>
            {/* <div className="flex items-center space-x-1 text-gray-600 cursor-pointer hover:text-blue-600">
              <span className="font-medium">English</span>
              <ChevronDown className="w-4 h-4" />
            </div> */}
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`hover:text-blue-700 py-2 ${
                    pathname === "/" ? "text-blue-600 font-medium" : "text-gray-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/learn"
                  className={`hover:text-blue-600 py-2 ${
                    pathname === "/learn" ? "text-blue-600 font-medium" : "text-gray-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Learn
                </Link>
                <Link
                  href="/contact"
                  className={`hover:text-blue-600 py-2 ${
                    pathname === "/contact" ? "text-blue-600 font-medium" : "text-gray-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium w-full">
                  Download Now
                </Button>
                {/* <div className="flex items-center justify-center space-x-1 text-gray-600 cursor-pointer hover:text-blue-600 py-2">
                  <span className="font-medium">English</span>
                  <ChevronDown className="w-4 h-4" />
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
