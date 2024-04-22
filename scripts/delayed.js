// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here

async function loadWidget() {
  await loadScript(
    `https://cdn.userway.org/widget.js`,
  );
}

loadWidget();
