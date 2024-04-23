// eslint-disable-next-line import/no-cycle
import { loadScript, loadCSS, sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

async function loadWidget() {
  await loadCSS('/scripts/clientlibs/widget.css');
  await loadScript('/scripts/clientlibs/widget.js').then(() => {
    setTimeout(() => {
      const iframe = document.querySelector('iframe');
      iframe.style.setProperty('max-width', '350px', 'important');
    }, 4000);
  });
}

loadWidget();
