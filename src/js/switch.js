const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchRef = document.querySelector('.js-switch-input');

switchRef.addEventListener('change', handleSwitch);

function handleSwitch(event) {
  if (event.target.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }

  localStorage.setItem(
    'theme',
    event.target.checked ? Theme.DARK : Theme.LIGHT,
  );
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.add(savedTheme);

  switchRef.checked = savedTheme === Theme.DARK;
}
