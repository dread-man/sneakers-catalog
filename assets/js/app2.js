'use strict'

window.addEventListener('load', function() {

    var previousElement = null;
    var currentElement = document.getElementsByClassName('important__info__li')[0];
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