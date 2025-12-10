import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-green-300/20 to-teal-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Brand Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full mb-6 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">
                ReorderX - Smart Customer Retention
              </span>
            </motion.div>

            <h1 className="text-gray-900 mb-6">
              Turn your customer phone numbers into repeat orders 📱
            </h1>
            <p className="text-gray-700 mb-8 text-xl">
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text">
                ReorderX
              </span>{" "}
              sends smart WhatsApp reminders and 1-tap reorders to bring
              customers back before they forget. No apps for customers. No
              manual follow-ups. Just more sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all shadow-xl shadow-orange-500/40 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Early Access - FREE Trial
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl border-2 border-orange-200 hover:border-orange-300 hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Book a demo
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span>Setup in 15 mins</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Mockup */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Mockup */}
              <div className="bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-gray-800">
                <div className="bg-gray-50 rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen Content - WhatsApp UI */}
                  <div className="bg-gradient-to-b from-green-600 to-green-500 p-4">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-green-600">R</span>
                      </div>
                      <div>
                        <div>ReorderX</div>
                        <div className="text-xs opacity-90">
                          Tap to view details
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-green-50 to-white p-4 space-y-4 h-96">
                    {/* Message Bubble */}
                    <div className="bg-white rounded-2xl rounded-tl-none shadow-md p-4 max-w-[85%]">
                      <p className="text-sm text-gray-700 mb-3">
                        Hi! It&apos;s been 15 days since your last order. Time
                        to restock? 🛒
                      </p>
                      <div className="text-xs text-gray-500">9:30 AM</div>
                    </div>

                    <div className="bg-white rounded-2xl rounded-tl-none shadow-md p-4 max-w-[85%]">
                      <p className="text-sm text-gray-700 mb-3">
                        <span className="block mb-2">Your usual order:</span>
                        • Almonds 500g
                        <br />
                        • Cashews 250g
                        <br />• Dates 500g
                      </p>
                      <button className="w-full bg-green-600 text-white py-2.5 rounded-lg mt-2 text-sm">
                        ✓ Reorder with 1 tap
                      </button>
                      <div className="text-xs text-gray-500 mt-2">9:30 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Bubbles */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-green-600 text-2xl mb-1">+32%</div>
                <div className="text-xs text-gray-600">Repeat Orders</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="text-blue-600 text-2xl mb-1">₹45k</div>
                <div className="text-xs text-gray-600">Extra Revenue</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
