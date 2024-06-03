import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-ul-container', {
  duration: 400,
  showMultiple: false,
  removeButton: true,
});

document.addEventListener('DOMContentLoaded', () => {
  const firstItem = document.querySelector('.accordion-ul-container .ac');
  if (firstItem) {
    accordion.open(0);
  }
});

function handleAccordionToggle(header) {
  const isActive = header.classList.toggle('ac-header-custom');
  header.classList.toggle('ac-border-none', isActive);
  const svgElement = header.querySelector('.icon-FAQ-arrow');
  if (svgElement) {
    svgElement.classList.toggle('rotated', isActive);
  }
}

function openFirstAccordionItem() {
  const firstItem = document.querySelector('.ac');
  if (firstItem) {
    const header = firstItem.querySelector('.ac-header');
    if (header) {
      handleAccordionToggle(header);
    }
  }
}

openFirstAccordionItem();

document.querySelectorAll('.ac-trigger').forEach(trigger => {
  trigger.addEventListener('click', event => {
    const currentHeader = event.target.closest('.ac-header');
    if (currentHeader) {
      const previousActiveHeader = document.querySelector(
        '.ac-header.ac-header-custom'
      );
      if (previousActiveHeader && previousActiveHeader !== currentHeader) {
        handleAccordionToggle(previousActiveHeader);
      }
      handleAccordionToggle(currentHeader);
    }
  });
});

document.querySelectorAll('.ac').forEach(item => {
  item.addEventListener('accordionjs:open', event => {
    const header = event.target.querySelector('.ac-header');
    if (header) {
      handleAccordionToggle(header);
    }
  });

  item.addEventListener('accordionjs:close', event => {
    const header = event.target.querySelector('.ac-header');
    if (header) {
      handleAccordionToggle(header);
    }
  });
});
