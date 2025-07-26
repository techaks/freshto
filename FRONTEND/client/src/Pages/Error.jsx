import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
          className="flex justify-center mb-6 text-green-600"
        >
          <AlertTriangle size={64} />
        </motion.div>

        <h1 className="text-5xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or is under construction.
        </p>

        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
