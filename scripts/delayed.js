// eslint-disable-next-line import/no-cycle
import { loadScript, sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

async function loadWidget() {
  await loadScript('scripts/clientlibs/widget.js').then(() => {
    console.log('---------------------------------script loaded');
    // wait for 1 second before accessing the iframe
    setTimeout(() => {
      console.log('---------------------------------1 second passed');
      const iframe = document.querySelector('iframe');
      // Add a 'load' event listener to the iframe
      iframe.style.maxWidth = '20%';
    }, 5000);
  });
}

loadWidget();
