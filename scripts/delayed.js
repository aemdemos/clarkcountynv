// eslint-disable-next-line import/no-cycle
import { loadScript, sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

async function loadWidget() {
  await loadScript(
    '/scripts/clientlibs/widget.js',
  );
  await loadCSS(
    '/scripts/clientlibs/widget.css',
  );
  // .then(() => {
  //   console.log('---------------------------------script loaded');
  //   // wait for 1 second before accessing the iframe
  //   setTimeout(() => {
  //     console.log('---------------------------------1 second passed');
  //     const iframe = document.querySelector('iframe');
  //
  //     // Add a 'load' event listener to the iframe
  //     iframe.addEventListener('load', () => {
  //       console.log('Iframe loaded successfully!');
  //
  //       // Access the iframe content to set CSS styles
  //       const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //       const mainElement = iframeDocument.querySelector('main');
  //
  //       // Example: Set CSS styles for the main element inside the iframe
  //       mainElement.style.backgroundColor = 'lightblue';
  //       mainElement.style.padding = '20px';
  //     });
  //   }, 5000);
  //   // const iframe = document.querySelector('iframe');
  //   //
  //   // // Add a 'load' event listener to the iframe
  //   // iframe.addEventListener('load', () => {
  //   //   console.log('Iframe loaded successfully!');
  //   //
  //   //   // Access the iframe content to set CSS styles
  //   //   const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  //   //   const mainElement = iframeDocument.querySelector('main');
  //   //
  //   //   // Example: Set CSS styles for the main element inside the iframe
  //   //   mainElement.style.backgroundColor = 'lightblue';
  //   //   mainElement.style.padding = '20px';
  //   // });
  // });
}

loadWidget();
