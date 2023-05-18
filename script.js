const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav__menu');
const changeThemeBtn = document.querySelector('#change_theme')
const func = document.querySelector('#func');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}


//Load Theme Settings
function loadThemeSettings() {
  const darkMode = localStorage.getItem('dark');

  if (darkMode) {
    toggleDarkMode();
  }

}

loadThemeSettings();

changeThemeBtn.addEventListener('change', () => {
  toggleDarkMode();


  localStorage.removeItem('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark', 1)
  }

});

const func_text = 'Front-End Developer';

func_text.split('').forEach((l, index) => {
  setTimeout(() => {
    func.innerHTML += l;
  }, 100 * index);
});

