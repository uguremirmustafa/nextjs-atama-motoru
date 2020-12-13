/** @format */

// import '../styles/globals.css';
import '../styles/index.css';
import { AppProvider } from '../contexts/SchoolsContext';
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className="container mx-auto max-w-xl">
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

export default MyApp;
