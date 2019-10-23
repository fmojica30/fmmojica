const navSlide = () => {

  //test
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.nav .menu .menuBtn');

  burger.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
    //burger animation
    burger.classList.toggle('toggle');
    console.log('surprise');
  });

}

navSlide();
