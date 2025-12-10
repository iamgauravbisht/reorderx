import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6">
            Ready to turn your phone book into profit?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Join hundreds of Indian businesses already using ReorderX to
            increase repeat orders. Start your 14-day free trial today — no
            credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-blue-600 px-10 py-4 rounded-xl hover:bg-gray-50 transition-colors shadow-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="bg-blue-500/30 backdrop-blur-sm text-white px-10 py-4 rounded-xl border-2 border-white/30 hover:bg-blue-500/40 transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Book a 15-min call
            </motion.button>
          </div>

          <motion.p
            className="text-blue-200 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            ✓ Free 14-day trial &nbsp;&nbsp;•&nbsp;&nbsp; ✓ No credit card
            needed &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
