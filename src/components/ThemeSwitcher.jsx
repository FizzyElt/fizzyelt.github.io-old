import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const bodyEle = document.body;

    if (mode === 'dark') {
      localStorage.setItem('theme', 'dark');
      bodyEle.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      bodyEle.classList.remove('dark');
    }
  }, [mode]);

  const handleSwitchMode = () => (mode === 'light' ? setMode('dark') : setMode('light'));

  return (
    <div>
      <button onClick={handleSwitchMode}>click</button>
    </div>
  );
};

export default ThemeSwitcher;
