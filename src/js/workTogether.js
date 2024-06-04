//js
import axios from "axios";
import iziToast from 'izitoast';

const form = document.querySelector('#work-form');
const input = document.querySelector('.work-form-input');
const message = document.querySelector('.work-form-input-text');
const success = document.querySelector('.work-together-success');
const errorInput = document.querySelector('.work-together-error-input');
const errorMessage = document.querySelector('.work-together-error-message');
const close = document.querySelector('.close-modal-btn');
const backdrop = document.querySelector('.backdrop');


function handleCloseClick() {
  backdrop.classList.remove('is-open');
  // Remove the event listener after the first click
  close.removeEventListener('click', handleCloseClick);
}

close.addEventListener('click', handleCloseClick);

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    backdrop.classList.remove('is-open');
    document.body.classList.toggle('stop-scrolling');
  }
});

backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    backdrop.classList.remove('is-open');
  }
});


const checkEmail = () => {
  if (input.validity.valid) {
    success.style.display = 'block';
    errorInput.style.display = 'none';
  } else {
    success.style.display = 'none';
  }
  if (input.value === '') {
    success.style.display = 'none';
  }
};

input.addEventListener('input', checkEmail);

form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value.trim() === '') {
    errorInput.style.display = 'block';
    errorInput.textContent = 'the field must be filled';
  }

  if (message.value.trim() === '') {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }

  if (input.value.trim() !== '' && message.value.trim() !== '') {
    
    axios
      .post('https://portfolio-js.b.goit.study/api/requests', {
        email: input.value,
        comment: message.value,
      })
      .then(res => {
  
        backdrop.classList.add('is-open');

        const title = document.querySelector('.work-modal-text-green');
        const text = document.querySelector('.work-modal-text');

        title.textContent = res.data.title;
        text.textContent = res.data.message;

        errorInput.style.display = 'none';
        errorMessage.style.display = 'none';
        success.style.display = 'none';
        form.reset();
      })
      .catch(error => {

        iziToast.error({
          title: 'Error',
          message: error.message,
          position: 'center',
        });
      });
  }
});