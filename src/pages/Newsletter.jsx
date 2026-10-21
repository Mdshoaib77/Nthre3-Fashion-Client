import React, { useState } from "react";
import { motion } from "framer-motion";

const Newsletter = () => {

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 mt-10 text-center rounded-3xl bg-gradient-to-br from-[#b95a2e] to-[#93411d] shadow-lift"
    >

      <div className="max-w-3xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-[30px] md:text-[38px] font-medium leading-tight tracking-tight text-white"
        >
          Subscribe to our Newsletter
        </motion.h2>

        <p className="mt-3 text-white/90">
          Get updates about new products and special offers.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >

          <input
            type="email"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full outline-none w-full sm:w-80 text-gray-800 bg-white shadow-md focus:ring-2 focus:ring-white/70"
          />

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="px-7 py-3 font-medium text-white transition-colors duration-300 rounded-full shadow-md bg-tertiary hover:bg-[#3a322c]"
          >
            Subscribe
          </motion.button>

        </form>

        {success && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 font-medium text-white"
          >
            🎉 Successfully Subscribed!
          </motion.p>
        )}

      </div>

    </motion.section>
  );
};

export default Newsletter;