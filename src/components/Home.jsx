import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import heroImage from '../assets/heroImage.jpg'; // Replace with your actual image path

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 dark:text-white p-6">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          👋 Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ankit Pratap</span>
        </h1>
        <p className="text-lg md:text-xl">
          Front-End Developer passionate about building amazing user experiences.
        </p>
      </motion.div>

      {/* Image and Animation */}
      <motion.div
        className="w-60 h-60 md:w-80 md:h-80 mb-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </motion.div>

      {/* Icons Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <FaLaptopCode className="text-5xl text-blue-500 mb-2" />
          <p className="font-semibold">Web Development</p>
        </div>
        <div className="flex flex-col items-center">
          <FaRocket className="text-5xl text-purple-500 mb-2" />
          <p className="font-semibold">Performance Optimization</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLightbulb className="text-5xl text-yellow-500 mb-2" />
          <p className="font-semibold">Creative Solutions</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
