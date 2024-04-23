// eslint-disable-next-line import/no-cycle
import { loadScript, loadCSS, sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

async function loadWidget() {
  await loadCSS('/scripts/clientlibs/widget.css');
  await loadScript('/scripts/clientlibs/widget.js').then(() => {
    console.log('---------------------------------script loaded');
    setTimeout(() => {
      console.log('---------------------------------5 second passed');
      const iframe = document.querySelector('iframe');
      // Add a 'load' event listener to the iframe
      iframe.style.maxWidth = '20vw';
    }, 5000);
  });
}

loadWidget();
