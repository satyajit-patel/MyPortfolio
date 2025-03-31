import React, { useState, useRef, useEffect } from 'react';
import {FloatingDockDemo} from "../float/FloatingDockDemo";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle play/pause
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Add event listeners for when the song ends
  useEffect(() => {
    const audio = audioRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
    };
    
    if (audio) {
      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);


  return (
    <>
    <nav className="bg-black p-1 flex justify-end relative">
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-full right-0 bg-black w-full flex-col items-end space-y-2 p-4 sm:flex sm:static sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-3`}
      >
        <Link
          to="/projects"
          className="px-3 py-1 text-sm border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-black transition"
        >
          Projects
        </Link>
        <Link
          to="/compiler"
          className="px-3 py-1 text-sm border border-gray-400 text-gray-400 rounded-md hover:bg-gray-400 hover:text-black transition"
        >
          Compiler
        </Link>
      </div>
    </nav>
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
      {/* Audio Element */}
      <audio ref={audioRef} src="/just-do-it.mp3"></audio>
      
      {/* Speaker Icon - Positioned at top right corner */}
      <div 
        className={`absolute top-4 right-4 cursor-pointer transform transition-transform hover:scale-110 ${isPlaying ? 'animate-pulse' : ''}`}
        onClick={toggleMusic}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
          {isPlaying ? (
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          ) : (
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 12c0 4.28-2.99 7.86-7 8.77v-2.06c2.89-.86 5-3.54 5-6.71s-2.11-5.85-5-6.71V3.23c4.01.91 7 4.49 7 8.77zm-7-8l-1.88 1.88L12 7.76zm-7.5 6.5v1h1.5v-1H4.5zm0 0M3 9v6h4l5 5V4L7 9H3z"/>
          )}
        </svg>
      </div>
      
      <div className="flex flex-col items-center max-w-md w-full px-4">
        {/* Title */}
        <h1 className="text-5xl mb-8 font-bold" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          Just do it!
        </h1>
        
        {/* Logo Circle with the provided image */}
        <div className="w-64 h-64 rounded-full border-2 border-white flex items-center justify-center mb-12 overflow-hidden">
          <img 
            src="https://res.cloudinary.com/ddo6latuj/image/upload/v1724069052/satyaVitImg_w9owdn.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Social Links */}
        <FloatingDockDemo />
      </div>
    </div>
    </>
  );
}

export default Home;