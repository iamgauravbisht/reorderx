import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "ReorderX increased our repeat orders by 35% in just 2 months. Customers love the WhatsApp reminders — it's so convenient for them!",
      author: "Rajesh Kumar",
      business: "Dry Fruits Shop, Delhi",
      rating: 5,
    },
    {
      quote:
        "We were losing so many customers who just forgot to reorder. Now the app handles everything automatically. Best investment for our grocery store.",
      author: "Priya Sharma",
      business: "Daily Needs Store, Mumbai",
      rating: 5,
    },
    {
      quote:
        "My salon appointment slots are always full now. The visit reminders work perfectly. Setup was super easy, took less than 30 minutes!",
      author: "Amit Patel",
      business: "Hair & Style Salon, Ahmedabad",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4">
            Loved by business owners across India
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            See what early adopters are saying about ReorderX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-500">
                  {testimonial.business}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
