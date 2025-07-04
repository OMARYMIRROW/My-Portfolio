let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/** section */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* sticky header */
window.onscroll = () =>{

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });



let header = document.querySelector('.header');

header.classList.toggle('sticky',  window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};





/** swipper  */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Animate skill progress bars when skills section is in view
function animateSkills() {
  const skillsSection = document.querySelector('.skills');
  const progressBars = document.querySelectorAll('.progress-bar > div');
  let animated = false;

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0
    );
  }

  function fillBars() {
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width') || bar.style.width;
      bar.style.width = width;
      bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
    });
  }

  function resetBars() {
    progressBars.forEach(bar => {
      bar.style.width = '0';
    });
  }

  // Set initial width to 0 and store target width in data attribute
  progressBars.forEach(bar => {
    bar.setAttribute('data-width', bar.style.width);
    bar.style.width = '0';
  });

  function onScroll() {
    if (!animated && isInViewport(skillsSection)) {
      fillBars();
      animated = true;
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  // In case already in view on load
  onScroll();
}

// Run animation setup after DOM is loaded
window.addEventListener('DOMContentLoaded', animateSkills);
