import { motion } from "motion/react";
import { Bell, UserPlus, Zap, BarChart3 } from "lucide-react";

export function ProductPreview() {
  const features = [
    { icon: Bell, text: "See all upcoming reminders" },
    { icon: UserPlus, text: "Add customers in seconds" },
    { icon: Zap, text: "Toggle automation on/off" },
    { icon: BarChart3, text: "Track message usage & costs" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gray-900 mb-6">Everything in one simple app</h2>
            <p className="text-gray-600 text-xl mb-8">
              Clean, intuitive dashboard designed for busy shop owners. No
              learning curve, no complexity.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    className="flex items-center gap-4 bg-gray-50 rounded-xl p-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Mock Screens */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Phone */}
              <div className="relative z-10 max-w-xs mx-auto">
                <div className="bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-gray-800">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
                      <div className="flex justify-between items-center mb-4">
                        <span>Dashboard</span>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 bg-white/20 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3 h-96">
                      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1">
                          Today&apos;s Reminders
                        </div>
                        <div className="text-2xl text-gray-900">24</div>
                      </div>

                      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                        <div className="text-xs text-gray-500 mb-1">
                          Active Customers
                        </div>
                        <div className="text-2xl text-gray-900">328</div>
                      </div>

                      <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-700">
                            Auto Reminders
                          </span>
                          <div className="w-10 h-6 bg-green-500 rounded-full" />
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-3 border border-blue-100">
                        <div className="text-xs text-gray-600 mb-1">
                          Messages Used
                        </div>
                        <div className="text-sm text-gray-900">842 / 1,500</div>
                        <div className="w-full bg-white rounded-full h-2 mt-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "56%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Phone */}
              <div className="absolute top-12 -right-8 max-w-xs opacity-30 blur-sm">
                <div className="bg-gray-200 rounded-[3rem] p-4 border-8 border-gray-400">
                  <div className="bg-gray-100 rounded-[2.5rem] h-[400px]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
