// import React from 'react';
// import { FaWhatsapp, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

// const SocialMedia = () => {
//   return (
//     <div className="p-8 text-center bg-custom-blue dark:bg-gray-800 transition-colors  rounded-lg shadow-md" >
//       <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Connect with Me</h2>

//       <div className="flex justify-center space-x-8">
       
//         <a
//           href="https://wa.me/9670950884"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-green-500 text-4xl hover:text-green-600 dark:hover:text-green-400 transition-transform transform hover:scale-110"
//         >
//           <FaWhatsapp />
//         </a>

//         {/* GitHub */}
//         <a
//           href="https://github.com/FrontEndNinjaDev"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-800 dark:text-gray-300 text-4xl hover:text-gray-600 dark:hover:text-gray-400 transition-transform transform hover:scale-110"
//         >
//           <FaGithub />
//         </a>

//         {/* Facebook */}
//         <a
//           href="https://facebook.com/mrankitpratap"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-600 text-4xl hover:text-blue-700 dark:hover:text-blue-500 transition-transform transform hover:scale-110"
//         >
//           <FaFacebook />
//         </a>

//         {/* Instagram */}
//         <a
//           href="https://instagram.com/mrankitpratap"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-pink-500 text-4xl hover:text-pink-600 dark:hover:text-pink-400 transition-transform transform hover:scale-110"
//         >
//           <FaInstagram />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SocialMedia;


import React from 'react';
import { FaWhatsapp, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 dark:text-white p-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Connect with Me 🌐
      </motion.h2>

      {/* Icons Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/9670950884"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-6xl hover:text-green-600 dark:hover:text-green-400"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/FrontEndNinjaDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-300 text-6xl hover:text-gray-600 dark:hover:text-gray-400"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>

        {/* Facebook */}
        <motion.a
          href="https://facebook.com/mrankitpratap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-6xl hover:text-blue-700 dark:hover:text-blue-500"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook />
        </motion.a>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com/mrankitpratap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 text-6xl hover:text-pink-600 dark:hover:text-pink-400"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default SocialMedia;
