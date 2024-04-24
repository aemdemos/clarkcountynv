// eslint-disable-next-line import/no-cycle
import { loadScript, loadCSS, sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

function applyMaxWidthToIframe(counter) {
  const iframe = document.querySelector('iframe');
  if (iframe) {
    iframe.style.setProperty('max-width', '350px', 'important');
  } else if (counter < 100) {
    setTimeout(() => applyMaxWidthToIframe(counter + 1), 200);
  }
}

async function loadWidget() {
  await loadCSS('/scripts/clientlibs/widget.css');
  await loadScript('/scripts/clientlibs/widget.js').then(() => {
    document.querySelector('.userway_buttons_wrapper .uai.userway_dark').style.setProperty('background', 'rgb(0, 148, 195)', 'important');
    applyMaxWidthToIframe(0);
  });
}

loadWidget();
