import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 py-12 md:px-24 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 text-green-600">About FRESHTO</h1>
        <p className="text-lg leading-relaxed mb-8">
          <span className="font-semibold text-green-500">FRESHTO</span> is your one-stop destination for the freshest
          groceries, vegetables, and fruits delivered right to your doorstep. Born from the idea of making everyday
          essentials more accessible, we blend technology with nature to ensure quality, convenience, and trust.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-500">What Makes Us Special?</h2>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Fresh, locally sourced produce picked daily</li>
              <li>Fast & hygienic doorstep delivery</li>
              <li>No compromise on quality and taste</li>
              <li>Affordable prices and exclusive offers</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-green-500">Our Mission</h2>
            <p className="text-base leading-relaxed">
              At FRESHTO, we aim to redefine how India shops for groceries. We are committed to sustainability, farmer
              support, and providing wholesome food that fuels healthy living for all families.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Why Customers Love Us</h3>
          <p className="text-base text-gray-600">
            With a user-friendly shopping experience, swift delivery, and unbeatable freshness, FRESHTO has become a
            trusted name for thousands of happy households.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
