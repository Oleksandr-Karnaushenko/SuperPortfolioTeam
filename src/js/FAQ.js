import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
  controlElement: '.faq-question',
  removeButton: true,
  callbacks: {
    onOpen: function (section) {
      console.log('Opened section:', section);
    },
    onClose: function (section) {
      console.log('Closed section:', section);
    },
  },
});

document.querySelectorAll('.ac-trigger').forEach(trigger => {
  trigger.addEventListener('click', event => {
    document.querySelectorAll('.ac-header').forEach(header => {
      header.classList.remove('ac-header-custom');
    });

    const header = event.target.closest('.ac-header');
    if (header) {
      header.classList.add('ac-header-custom');
    }
  });
});
