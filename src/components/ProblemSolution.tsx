import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">
            Stop losing customers to forgetfulness
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Most customers want to buy again. They just forget. See the
            difference ReorderX makes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without ReorderX */}
          <motion.div
            className="bg-red-50 rounded-3xl p-8 border border-red-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-gray-900">Without ReorderX</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                <span>Customers forget to reorder after 2-3 weeks</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                <span>No systematic follow-ups or reminders</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                <span>Manual tracking in notebooks or Excel sheets</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                <span>Lost revenue from one-time customers</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-red-500 mt-1">•</span>
                <span>Time wasted on manual calling and messaging</span>
              </li>
            </ul>
          </motion.div>

          {/* With ReorderX */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 border border-blue-100 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-gray-900">With ReorderX</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-700">
                <span className="text-green-500 mt-1">✓</span>
                <span>Automated WhatsApp reminders at perfect timing</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-green-500 mt-1">✓</span>
                <span>1-tap reorder buttons for instant purchases</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-green-500 mt-1">✓</span>
                <span>Simple app to manage all customers in one place</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-green-500 mt-1">✓</span>
                <span>30-40% increase in repeat orders</span>
              </li>
              <li className="flex gap-3 text-gray-700">
                <span className="text-green-500 mt-1">✓</span>
                <span>Set it up once, runs on autopilot forever</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
