import { useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5/index.js';

const ThemeSwitcher = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme'));

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  const handleSwitchMode = () => {
    if (mode === 'dark') {
      setMode('light');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
      return;
    }

    setMode('dark');
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark');
  };
  return (
    <button onClick={handleSwitchMode}>
      {mode === 'dark' ? <IoSunny className="text-xl" /> : <IoMoon className="text-xl" />}
    </button>
  );
};

export default ThemeSwitcher;
