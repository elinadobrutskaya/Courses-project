import $ from 'jquery'
import 'slick-carousel'

$(document).ready(function () {
  $('.slider-container').slick({
    // важно — именно контейнер, где лежат слайды
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  })
})

const burgerBtn = document.querySelector('.header-burger-button button')
const nav = document.querySelector('.header-navigation')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active')
  nav.classList.toggle('active')
})
