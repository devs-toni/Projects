import './App.css';
import Layout from './page/Layout';
import useLocalStorage from 'use-local-storage';

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
/*     console.log(theme);
 */  }

  return (
    <div className='App' data-theme={theme}>
      <Layout switchTheme={switchTheme} />
    </div>
  );
}
export default App;
