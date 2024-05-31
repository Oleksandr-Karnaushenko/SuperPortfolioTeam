import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
  removeButton: true,
});

document.querySelectorAll('.ac-trigger').forEach(trigger => {
  trigger.addEventListener('click', event => {
    document.querySelectorAll('.ac-header').forEach(header => {
      header.classList.remove('ac-header-custom');
      header.classList.remove('ac-border-none'); // Видалення класу, коли фокус не на елементі
    });

    const header = event.target.closest('.ac-header');
    if (header) {
      header.classList.add('ac-header-custom');
      header.classList.add('ac-border-none');
    }
  });

  trigger.addEventListener('blur', () => {
    const header = trigger.closest('.ac-header');
    if (header) {
      header.classList.remove('ac-border-none');
    }
  });
});
