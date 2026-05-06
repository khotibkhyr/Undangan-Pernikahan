import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for environments where matchMedia might be missing or limited
if (typeof window !== 'undefined') {
  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {}, 
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    } as MediaQueryList);
  } else {
    // Some legacy browsers or environments might have matchMedia but return objects without addListener
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql && !mql.addListener) {
      // @ts-ignore
      MediaQueryList.prototype.addListener = function(cb) { this.addEventListener('change', cb); };
      // @ts-ignore
      MediaQueryList.prototype.removeListener = function(cb) { this.removeEventListener('change', cb); };
    }
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
