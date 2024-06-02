let checkbox = document.querySelector('#switch');
let body = document.querySelector('body');

let localStorageTheme = localStorage.getItem('theme');

const setThemeColor = () => {
  localStorageTheme === 'dark' ? setDarkMode() : setLightMode();
};

const checkModeSeting = () => {
  window
    .matchMedia('(prefers-color-scheme: dark')
    .addEventListener('change', () => {
      checkThemeChange();
    });
};

const checkThemeChange = () => {
  if (
    localStorageTheme == null &&
    window.matchMedia('(prefers-color-scheme: dark').matches
  ) {
    setDarkMode();
  } else if (
    localStorageTheme &&
    window.matchMedia('(prefers-color-scheme: dark').matches
  ) {
    setDarkMode();
  } else {
    setLightMode();
  }
};

const setDarkMode = () => {
  body.classList = 'dark';
  localStorage.setItem('theme', 'dark');
  checkbox.checked = true;
};
const setLightMode = () => {
  body.classList = 'light';
  localStorage.setItem('theme', 'light');

  checkbox.checked = false;
};

checkModeSeting();
checkThemeChange();
setThemeColor();

checkbox.addEventListener('click', () =>
  checkbox.checked ? setDarkMode() : setLightMode()
);
