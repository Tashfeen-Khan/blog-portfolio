"use client"
// components/DarkModeToggle.js
import { useEffect, useState } from 'react';
import { HiMoon } from "react-icons/hi";
import { HiSun } from "react-icons/hi";

const DarkModeToggleBtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in localStorage
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2    rounded"
    >
      {darkMode ?  <HiSun className='text-xl' />:<HiMoon className='text-xl' />  
      }
    </button>
  );
};

export default DarkModeToggleBtn;
