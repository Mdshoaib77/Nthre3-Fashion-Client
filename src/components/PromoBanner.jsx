import React from "react";
import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-secondary"
    >
      <div className="px-6 mx-auto max-w-7xl">

        <div className="grid items-center gap-10 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-black md:text-4xl">
              Summer Sale is Live 🔥
            </h2>

            <p className="mt-4 text-gray-600">
              Get up to <span className="font-semibold">50% OFF</span> on our
              latest collection. Limited time offer — grab your favorites now.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 mt-6 font-medium text-white rounded-lg bg-primary hover:opacity-90"
            >
              Shop Now
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1523381294911-8d3cead13475"
              alt="sale"
              className="rounded-xl shadow-lg w-[320px] sm:w-[400px]"
            />
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default PromoBanner;