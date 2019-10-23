const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.menu');
  burger.addEventListener('click', function() {
    nav.classList.toggle('menu-active');
  });
  console.log('HI');
}

navSlide();
