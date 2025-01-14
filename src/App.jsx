import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Projects from './components/Projects';
import { ThemeProvider } from './components/contextApi/ThemeContext';
import ChatBox from './components/ChatBox';
import Personal from './components/Personal';

function App() {
  return (

    <ThemeProvider>
      <Router>
      <div className="min-h-screen :bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat-box" element={<ChatBox />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/projects" element={<Projects username='shivamstm01' />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
