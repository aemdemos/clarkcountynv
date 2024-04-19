import { createOptimizedPicture } from '../../scripts/aem.js';

function appendArrowImagesToAnchors() {
  const aTags = document.querySelectorAll('.cards-wrapper .cards-card-body .button-container a');
  aTags.forEach((a) => {
    const { innerText } = a;
    a.innerHTML = '';
    const span = document.createElement('span');
    span.innerText = innerText;
    const img = document.createElement('img');
    img.src = '/icons/white-arrow-right.png';
    img.alt = 'Right Arrow';
    a.append(span, img);
  });
}

function validateAndCorrectCardsText() {
  const cardBodyElements = document.querySelectorAll('.cards-wrapper .cards-card-body');
  cardBodyElements.forEach((cardBody) => {
    if (cardBody.children.length === 2 && cardBody.querySelector('p strong')) {
      const description = cardBody.querySelector('strong').textContent;
      cardBody.querySelector('strong').remove();
      const strongTag = document.createElement('strong');
      strongTag.textContent = description;
      cardBody.insertBefore(strongTag, cardBody.children[1]);
    }
  });
}

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
  appendArrowImagesToAnchors();
  validateAndCorrectCardsText();
}
