'use strict'

// changing theme 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconSneaker = document.getElementById('header-icon-sneaker')

// определяем пути к картинкам для разных тем
let whiteSneakerPath = '../assets/icons/sneakers_white.png';
let blackSneakerPath = '../assets/icons/sneakers_black.png';

// определяем имя ключа для сохранения текущей картинки в локальном хранилище
let sneakerImagePathKey = 'sneakerImagePath';

let themeIcon = document.getElementById('theme-icon')
let sunIcon = 'ri-sun-line';
let moonIcon = 'ri-moon-line';
let currentIcon = localStorage.getItem('themeIcon') || sunIcon;

themeIcon.classList.add(currentIcon);

if(themeButton) {
	themeButton.addEventListener('click', () => {

		document.body.classList.toggle(darkTheme)
		// сохраняем текущую тему в локальном хранилище браузера
		let isDarkTheme = document.body.classList.contains(darkTheme);
		localStorage.setItem('isDarkTheme', isDarkTheme);

		// проверяем текущий путь к картинке и меняем его на противоположный
		if (iconSneaker.src.endsWith('black.png')) {
		iconSneaker.src = whiteSneakerPath;
		} else {
		iconSneaker.src = blackSneakerPath;
		}
		// сохраняем путь к текущей картинке в локальном хранилище браузера
		localStorage.setItem(sneakerImagePathKey, iconSneaker.src);

		if (currentIcon === sunIcon) {
			currentIcon = moonIcon;
		  } else {
			currentIcon = sunIcon;
		  }
		  themeIcon.classList.toggle(sunIcon);
		  themeIcon.classList.toggle(moonIcon);
		
		  // Сохраняем текущий класс иконки в локальное хранилище
		  localStorage.setItem('themeIcon', currentIcon);
	})
}

// проверяем, есть ли сохраненный путь к картинке в локальном хранилище браузера
let savedSneakerImagePath = localStorage.getItem(sneakerImagePathKey);

// устанавливаем текущую картинку, используя сохраненный путь, если он есть
if (savedSneakerImagePath) {
  iconSneaker.src = savedSneakerImagePath;
}

// проверяем, есть ли сохраненная тема в локальном хранилище браузера
let savedIsDarkTheme = localStorage.getItem('isDarkTheme');

// устанавливаем соответствующий класс темы на элементе body
if (savedIsDarkTheme === 'true') {
  document.body.classList.add(darkTheme);
} else {
  document.body.classList.remove(darkTheme);
}

window.addEventListener('load', function() {

    let previousElement = null;
    let currentElement = document.getElementsByClassName('important__info__li')[0];
    currentElement.classList.add('showing');
    
    setInterval(function() {
      previousElement = currentElement;
      currentElement = currentElement.nextElementSibling || document.getElementsByClassName('important__info__li')[0];
      
      previousElement.classList.remove('showing');
      currentElement.classList.add('showing');
    }, 3000);
});


const list = document.querySelectorAll('.modeles__ul__li__a')

list.forEach(el => el.addEventListener('click', (el) => {
	for(let i = 0; i < list.length; i++) {
		list[i].classList.remove('modeles__ul__li__a-active')
	}
	el.target.classList.add('modeles__ul__li__a-active')
}))


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 1750 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 1450 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top', 
    distance: '60px',
    duration: 2500, 
    delay: 400,   
  })
  
  sr.reveal('.home__data, .footer__container, .footer__group')
  sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
  sr.reveal(`.logos__img, .program__card, .pricing__card`, {internal: 100})
  sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
  sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})