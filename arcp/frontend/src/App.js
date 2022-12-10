import './App.css';
import Layout from './page/Layout';
import useLocalStorage from 'use-local-storage';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { LanguageProvider } from './context/LanguageContext';

const TRACKING_ID = "G-CPMWR2W1F0"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [isNavShow, setIsNavShow] = useState(false);

  const switchTheme = (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App' data-theme={theme}>
      <LanguageProvider>
        <Layout switchTheme={switchTheme} isNavShow={isNavShow} setIsNavShow={setIsNavShow} />
      </LanguageProvider>
    </div>
  );
}
export default App;
