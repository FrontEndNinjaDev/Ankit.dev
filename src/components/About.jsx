// import React from 'react';

// const About = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-md mt-8">
//       <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
      
//       <p className="mb-4">
//         👋 Hi, I'm <span className="font-bold">Ankit Pratap Gupta</span>, a passionate <span className="font-bold">Front-End Developer</span> with <span className="font-bold">2 years of experience</span> specializing in <span className="font-bold">React</span> and modern web technologies. I thrive on building responsive, high-performance applications with a focus on delivering exceptional user experiences.
//       </p>

//       <h3 className="text-2xl font-semibold mt-6 mb-2">Skills</h3>
//       <ul className="list-disc list-inside mb-4">
//         <li><span className="font-bold">Front-End:</span> HTML, CSS, JavaScript, React, Redux, TypeScript, Next.js, Tailwind CSS, Material-UI</li>
//         <li><span className="font-bold">State Management:</span> Redux Toolkit, Context API</li>
//         <li><span className="font-bold">Tools:</span> Npm, Yarn, Bun, Vite, Git, GitHub, Postman</li>
//         <li><span className="font-bold">APIs:</span> REST APIs, Axios, Appwrite</li>
//       </ul>

//       <h3 className="text-2xl font-semibold mt-6 mb-2">Professional Experience</h3>
//       <div className="mb-4">
//         <p className="font-bold">Software Engineer II – Full Stack Web Developer</p>
//         <p className="text-gray-600 dark:text-gray-400">Allahabad, India</p>
//         <p>Developed and integrated REST APIs, built admin panel home pages, and ensured high performance, security, and user experience.</p>
//       </div>

//       <div className="mb-4">
//         <p className="font-bold">Software Engineer II – React Developer</p>
//         <p className="text-gray-600 dark:text-gray-400">Bhopal, India</p>
//         <p>Designed and developed chat functionality, course product UI, and MCQ examination pages.</p>
//       </div>

//       <div className="mb-4">
//         <p className="font-bold">Software Engineer I – React Developer</p>
//         <p className="text-gray-600 dark:text-gray-400">Mumbai, India</p>
//         <p>Built e-commerce platforms, integrated Razorpay payments, and implemented features like chat and Google authentication.</p>
//       </div>

//       <h3 className="text-2xl font-semibold mt-6 mb-2">Education</h3>
//       <p><span className="font-bold">Bachelor of Computer Applications (BCA)</span></p>
//       <p className="text-gray-600 dark:text-gray-400">A.P.J. Abdul Kalam Azad University</p>

//       <p className="mt-6">🚀 I love solving problems, learning new technologies, and collaborating with others to create impactful digital products.</p>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      {/* Heading Section */}
      <motion.div
        className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>

        <p className="mb-4">
          👋 Hi, I'm <span className="font-bold">Ankit Pratap Gupta</span>, a passionate <span className="font-bold">Front-End Developer</span> with <span className="font-bold">2 years of experience</span> specializing in <span className="font-bold">React</span> and modern web technologies. I thrive on building responsive, high-performance applications with a focus on delivering exceptional user experiences.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Skills</h3>
        <ul className="list-disc list-inside mb-4">
          <li><span className="font-bold">Front-End:</span> HTML, CSS, JavaScript, React, Redux, TypeScript, Next.js, Tailwind CSS, Material-UI</li>
          <li><span className="font-bold">State Management:</span> Redux Toolkit, Context API</li>
          <li><span className="font-bold">Tools:</span> Npm, Yarn, Bun, Vite, Git, GitHub, Postman</li>
          <li><span className="font-bold">APIs:</span> REST APIs, Axios, Appwrite</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Professional Experience</h3>
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="font-bold">Software Engineer II – Full Stack Web Developer</p>
          <p className="text-gray-600 dark:text-gray-400">Allahabad, India</p>
          <p>Developed and integrated REST APIs, built admin panel home pages, and ensured high performance, security, and user experience.</p>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="font-bold">Software Engineer II – React Developer</p>
          <p className="text-gray-600 dark:text-gray-400">Bhopal, India</p>
          <p>Designed and developed chat functionality, course product UI, and MCQ examination pages.</p>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <p className="font-bold">Software Engineer I – React Developer</p>
          <p className="text-gray-600 dark:text-gray-400">Mumbai, India</p>
          <p>Built e-commerce platforms, integrated Razorpay payments, and implemented features like chat and Google authentication.</p>
        </motion.div>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Education</h3>
        <p><span className="font-bold">Bachelor of Computer Applications (BCA)</span></p>
        <p className="text-gray-600 dark:text-gray-400">A.P.J. Abdul Kalam Azad University</p>

        <p className="mt-6">🚀 I love solving problems, learning new technologies, and collaborating with others to create impactful digital products.</p>
      </motion.div>
    </div>
  );
};

export default About;
