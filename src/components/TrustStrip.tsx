import { Store, ShoppingBag, Apple, Scissors, Pill } from "lucide-react";
import { motion } from "motion/react";

export function TrustStrip() {
  const categories = [
    { icon: Store, label: "Restaurants" },
    { icon: ShoppingBag, label: "Grocery Shops" },
    { icon: Apple, label: "Dry Fruit Stores" },
    { icon: Scissors, label: "Salons" },
    { icon: Pill, label: "Pharmacies" },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-center text-gray-700 text-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Trusted by local businesses across India
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.label}
                className="flex items-center gap-2 text-gray-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Icon className="w-5 h-5 text-orange-600" />
                <span className="text-sm">{category.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
