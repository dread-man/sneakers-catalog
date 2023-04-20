'use strict'

// for animated load page
document.addEventListener("DOMContentLoaded", function() {
	var body = document.querySelector("body");
	body.style.opacity = 1;
	body.style.transition = "opacity 0.5s ease-in-out";
  });

// all variables
const header = document.getElementById('header')
const themeButton = document.getElementById('theme-button')
const menuButton = document.getElementById('burger-menu')
const mobileMenu = document.getElementById('mobile-menu')
const closeMenu = document.getElementById('close-menu')
const main = document.getElementById('main')
const footer = document.getElementById('footer')
const listLinks = document.querySelectorAll('.header__list-item')
const headerSneaker = document.getElementById('header-icon-sneaker')

// for count active sneakers
function getCount() {
	const countElem = document.getElementById('count-text')
	let count = 0
	for(let i = 0; i < elList.length; i++) {
		if(elList[i].classList.contains('sneaker__none')) {
			continue
		} else {
			count++
		}
	}
	//console.log(count)
	countElem.textContent = count
}

// for closing mobile menu click on all links
listLinks.forEach(el => el.addEventListener('click', () => {
	mobileMenu.classList.add('mobile__menu-hide')
	header.classList.remove('body__blur')
	main.classList.remove('body__blur')
	footer.classList.remove('body__blur')
	headerSneaker.classList.remove('header__icon-hide')
	document.body.style.overflow = 'scroll';
}))

// opening mobile menu and adding blur on background
if(menuButton) {
	menuButton.addEventListener('click', () => {
		mobileMenu.classList.remove('mobile__menu-hide')
		header.classList.add('body__blur')
		main.classList.add('body__blur')
		footer.classList.add('body__blur')
		headerSneaker.classList.add('header__icon-hide')
		document.body.style.overflow = 'hidden';
	})
}

// closing mobile menu and removing blur on background
if(closeMenu) {
	closeMenu.addEventListener('click', () => {
		mobileMenu.classList.add('mobile__menu-hide')
		header.classList.remove('body__blur')
		main.classList.remove('body__blur')
		footer.classList.remove('body__blur')
		headerSneaker.classList.remove('header__icon-hide')	
		document.body.style.overflow = 'scroll';
	})
}


// media queriy for deleting mobile menu
const mediaQuery1 = window.matchMedia('(max-width: 1024px)');

function handleMediaQueryChange1(mediaQuery) {
	if (mediaQuery.matches) {
		header.classList.add('header__mobile')
	} else {
		header.classList.remove('header__mobile')
		mobileMenu.classList.add('mobile__menu-hide')
		header.classList.remove('body__blur')
		main.classList.remove('body__blur')
		footer.classList.remove('body__blur')
		document.body.style.overflow = 'scroll';
	}
}
mediaQuery1.addListener(handleMediaQueryChange1);
handleMediaQueryChange1(mediaQuery1);

// FILTER COMPANIES

// for header
const nike1 = document.getElementById('nike-button1')
const adidas1 = document.getElementById('adidas-button1')
const nb1 = document.getElementById('nb-button1')

// for mobile menu
const nike2 = document.getElementById('nike-button2')
const adidas2 = document.getElementById('adidas-button2')
const nb2 = document.getElementById('nb-button2')

const elList = document.querySelectorAll('.all__sheakers__ul-li')
const modelsList = document.querySelectorAll('.modeles-li')
const linksModelsList = document.querySelectorAll('.modeles__ul__li__a')

linksModelsList.forEach(el => el.addEventListener('click', () => {
	let str = el.textContent;
	str = str.replace(/\s+/g, '');
	str = str.toLowerCase();
	// console.log(str)
	for(let i = 0; i < elList.length; i++) {
		if(elList[i].classList.contains(`${str}`)) {
			elList[i].classList.remove('sneaker__none')
			continue
		} else {
			elList[i].classList.add('sneaker__none')
		}
	}
	getCount()
}))



if(nike1) {
	nike1.addEventListener('click', () => {
		// for disaablead active class
		linksModelsList.forEach((el) => {
			if(el.classList.contains('modeles__ul__li__a-active')) {
				el.classList.remove('modeles__ul__li__a-active')
			}
		})


		// for hiding another models
		for(let i = 0; i < elList.length; i++) {
			if(elList[i].classList.contains('nike')) {
				elList[i].classList.remove('sneaker__none')
				continue
			} else {
				elList[i].classList.add('sneaker__none')
			}
		}

		// for hiding another models
		for(let i = 0; i < modelsList.length; i++) {
			if(modelsList[i].classList.contains('nike')) {
				modelsList[i].classList.remove('models__none')
				continue
			} else {
				modelsList[i].classList.add('models__none')
			}
		}
		getCount()
	})
}



if(adidas1) {
	adidas1.addEventListener('click', () => {
		// for disaablead active class
		linksModelsList.forEach((el) => {
			if(el.classList.contains('modeles__ul__li__a-active')) {
				el.classList.remove('modeles__ul__li__a-active')
			}
		})

		for(let i = 0; i < elList.length; i++) {
			if(elList[i].classList.contains('adidas')) {
				elList[i].classList.remove('sneaker__none')
				continue
			} else {
				elList[i].classList.add('sneaker__none')
			}
		}

		for(let i = 0; i < modelsList.length; i++) {
			// modelsList[i].classList.remove('modeles__ul__li__a-active')
			if(modelsList[i].classList.contains('adidas')) {
				modelsList[i].classList.remove('models__none')
				continue
			} else {
				modelsList[i].classList.add('models__none')
			}
		}
		getCount()
	})
}

if(nb1) {
	nb1.addEventListener('click', () => {
		// for disaablead active class
		linksModelsList.forEach((el) => {
			if(el.classList.contains('modeles__ul__li__a-active')) {
				el.classList.remove('modeles__ul__li__a-active')
			}
		})

		for(let i = 0; i < elList.length; i++) {
			if(elList[i].classList.contains('nb')) {
				elList[i].classList.remove('sneaker__none')
				continue
			} else {
				elList[i].classList.add('sneaker__none')
			}
		}

		for(let i = 0; i < modelsList.length; i++) {
			// modelsList[i].classList.remove('modeles__ul__li__a-active')
			if(modelsList[i].classList.contains('nb')) {
				modelsList[i].classList.remove('models__none')
				continue
			} else {
				modelsList[i].classList.add('models__none')
			}
		}
		getCount()
	})
}


if(nike2) {
	nike2.addEventListener('click', () => {
		// for disaablead active class
		linksModelsList.forEach((el) => {
			if(el.classList.contains('modeles__ul__li__a-active')) {
				el.classList.remove('modeles__ul__li__a-active')
			}
		})

		for(let i = 0; i < elList.length; i++) {
			if(elList[i].classList.contains('nike')) {
				elList[i].classList.remove('sneaker__none')
				continue
			} else {
				elList[i].classList.add('sneaker__none')
			}
		}

		for(let i = 0; i < modelsList.length; i++) {
			// modelsList[i].classList.remove('modeles__ul__li__a-active')
			if(modelsList[i].classList.contains('nike')) {
				modelsList[i].classList.remove('models__none')
				continue
			} else {
				modelsList[i].classList.add('models__none')
			}
		}
		getCount()
	})
}

if(adidas2) {
	adidas2.addEventListener('click', () => {
		// for disaablead active class
		linksModelsList.forEach((el) => {
			if(el.classList.contains('modeles__ul__li__a-active')) {
				el.classList.remove('modeles__ul__li__a-active')
			}
		})

		for(let i = 0; i < elList.length; i++) {
			if(elList[i].classList.contains('adidas')) {
				elList[i].classList.remove('sneaker__none')
				continue
			} else {
				elList[i].classList.add('sneaker__none')
			}
		}

		for(let i = 0; i < modelsList.length; i++) {
			// modelsList[i].classList.remove('modeles__ul__li__a-active')
			if(modelsList[i].classList.contains('adidas')) {
				modelsList[i].classList.remove('models__none')
				continue
			} else {
				modelsList[i].classList.add('models__none')
			}
		}
		getCount()
	})
}

if(nb2) {
	nb2.addEventListener('click', () => {
		// for disaablead active class
		linksModelsList.forEach((el) => {
			if(el.classList.contains('modeles__ul__li__a-active')) {
				el.classList.remove('modeles__ul__li__a-active')
			}
		})

		for(let i = 0; i < elList.length; i++) {
			if(elList[i].classList.contains('nb')) {
				elList[i].classList.remove('sneaker__none')
				continue
			} else {
				elList[i].classList.add('sneaker__none')
			}
		}

		for(let i = 0; i < modelsList.length; i++) {
			// modelsList[i].classList.remove('modeles__ul__li__a-active')
			if(modelsList[i].classList.contains('nb')) {
				modelsList[i].classList.remove('models__none')
				continue
			} else {
				modelsList[i].classList.add('models__none')
			}
		}
		getCount()
	})
}



const elemsList = document.querySelectorAll('.all__sheakers__ul-li')

// find modal window and close button
var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".close-modal");
var buyButton = document.getElementById('buy-btn')

elemsList.forEach(el => el.addEventListener("click", function() {
	modal.classList.add("active");
	document.body.style.overflow = 'hidden';
}))

// close modal window on click on close button
closeModal.addEventListener("click", function() {
  modal.classList.remove("active");
  document.body.style.overflow = 'scroll';
});

// close modal window on click on close button
buyButton.addEventListener("click", function() {
	modal.classList.remove("active");
	document.body.style.overflow = 'scroll';
  });


// Закрыть модальное окно при клике вне контента
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.classList.remove("active");
	document.body.style.overflow = 'scroll';
  }
});

// Адаптивный дизайн модального окна
window.addEventListener("resize", function() {
  var maxWidth = 600; // Максимальная ширина модального окна
  var width = Math.min(maxWidth, window.innerWidth * 0.8); // Ширина контента модального окна
  modal.querySelector(".modal-content").style.width = width + "px";
});

