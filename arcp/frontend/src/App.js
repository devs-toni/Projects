import './App.css';
import Layout from './page/Layout';
import useLocalStorage from 'use-local-storage';
import { useState } from 'react';

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [isNavShow, setIsNavShow] = useState(false);

  const switchTheme = (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsNavShow(!isNavShow);
  }

  return (
    <div className='App' data-theme={theme}>
      <Layout switchTheme={switchTheme} isNavShow={isNavShow} setIsNavShow={setIsNavShow} />
    </div>
  );
}
export default App;
