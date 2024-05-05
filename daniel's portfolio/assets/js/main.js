/*===== MENU SHOW HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

/*=======  HIDE MENU =======*/
const navLInks = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}

/*===== Repeat Action =====*/
navLInks.forEach(link => link.addEventListener('click', linkAction))

/*===== ACTIVE AND HIDE MENU =====*/


/*===== SCROLL SECTIONS TO ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener('scroll', scrollActive);

function scrollActive(){
   const scrollY = window.pageYOffset;

   sections.forEach(current => {
       const sectionHeight = current.offsetHeight;
       const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');


       (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)? 
        document.querySelector('nav__menu a[href*='+ sectionId +']').classList.add('active')
        : 
        document.querySelector('nav__menu a[href*='+ sectionId +']').classList.remove('active')
       
       
   })
}