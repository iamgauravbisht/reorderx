import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white">R</span>
              </div>
              <span className="text-gray-900">ReorderX</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#for-whom"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              For Whom
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
              Login
            </button>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2.5 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg shadow-orange-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
