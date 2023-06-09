const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav__menu');
const changeThemeBtn = document.querySelector('#change_theme')
const techs = document.querySelector('.techs');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');

  if (document.body.classList.contains('dark')) {
    navMenu.classList.remove('nav__menu__down__mobile');
    navMenu.classList.add('dark')
  } else {
    navMenu.classList.add('nav__menu__down__mobile')
  }
  
  // if (document.body.classList.contains('light')) {
  //   navMenu.classList.remove('dark')
  // } else {
  //   navMenu.classList.add('nav__menu__down__mobile')
  // }


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

// const func_text = 'Front-End';

// func_text.split('').forEach((i, index) => {
//   setTimeout(() => {
//     func.innerHTML += i;
//   }, 100 * index);
// });


var Typed = new Typed('#elements', {
  strings: ['Front-End', 'Mobile'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});