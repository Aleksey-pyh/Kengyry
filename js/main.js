// var but = document.querySelectorAll('.more');
// var block = document.querySelectorAll('.mask');
// function show(elem) {
//   var mask = elem.previousSibling.previousElementSibling
//   if (mask.classList.contains('show')){
//     mask.classList.remove('show');
//     elem.textContent = 'Развернуть';
//   }
//   else{mask.classList.add('show');
//   elem.textContent = 'Свернуть';}
// }
$('.sliderChapter').slick({
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});
$('.slidersLeft').slick({
  dots:false,
  arrows:false,
  speed:1300,
  autoplay: true,
  autoplaySpeed: 1300,
  vertical:true,
  slidesToShow: 5,
  slidesToScroll: 1,
});
$('.dateSlider').slick({
  dots:false,
  arrows:false,
  speed:1300,
  autoplay: true,
  autoplaySpeed: 1300,
  vertical:true,
  slidesToShow: 5,
  slidesToScroll: 1,
});

// $('#catalog').on('click', function(e){
//     $('html,body').stop().animate({ scrollTop: $('#titleCatalog').offset().top }, 1000);
//     e.preventDefault();
// });
// $('#dostavka').on('click', function(e){
//     $('html,body').stop().animate({ scrollTop: $('#titleDostavka').offset().top }, 1000);
//     e.preventDefault();
// });
// $('#kontakty').on('click', function(e){
//     $('html,body').stop().animate({ scrollTop: $('footer').offset().top }, 1000);
//     e.preventDefault();
// });
// var modal = document.querySelector('.modal');
// var closeBut = document.querySelector('.close');
// var fade = document.querySelector('#fadeModal');
// $('#callback').on('click', function(e){
//     modal.classList.add('active');
//     e.preventDefault();
// });
// $('.close').on('click', function(e){
//     modal.classList.remove('active');
//     e.preventDefault();
// });
// $('#fadeModal').on('click', function(e){
//     modal.classList.remove('active');
//     e.preventDefault();
// });


// $('#product1').on('click', function(e){
//     $('#openModal1').addClass('active');
//     e.preventDefault();
// });
// $('#close1').on('click', function(e){
//     $('#openModal1').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal1').on('click', function(e){
//     $('#openModal1').removeClass('active');
//     e.preventDefault();
// });

// $('#product2').on('click', function(e){
//     $('#openModal2').addClass('active');
//     e.preventDefault();
// });
// $('#close2').on('click', function(e){
//     $('#openModal2').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal2').on('click', function(e){
//     $('#openModal2').removeClass('active');
//     e.preventDefault();
// });

// $('#product3').on('click', function(e){
//     $('#openModal3').addClass('active');
//     e.preventDefault();
// });
// $('#close3').on('click', function(e){
//     $('#openModal3').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal3').on('click', function(e){
//     $('#openModal3').removeClass('active');
//     e.preventDefault();
// });

// $('#product4').on('click', function(e){
//     $('#openModal4').addClass('active');
//     e.preventDefault();
// });
// $('#close4').on('click', function(e){
//     $('#openModal4').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal4').on('click', function(e){
//     $('#openModal4').removeClass('active');
//     e.preventDefault();
// });

// $('#product5').on('click', function(e){
//     $('#openModal5').addClass('active');
//     e.preventDefault();
// });
// $('#close5').on('click', function(e){
//     $('#openModal5').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal5').on('click', function(e){
//     $('#openModal5').removeClass('active');
//     e.preventDefault();
// });

// $('#product6').on('click', function(e){
//     $('#openModal6').addClass('active');
//     e.preventDefault();
// });
// $('#close6').on('click', function(e){
//     $('#openModal6').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal6').on('click', function(e){
//     $('#openModal6').removeClass('active');
//     e.preventDefault();
// });

// $('.flesh').on('click', function(e){
//     $('#openModal7').addClass('active');
//     e.preventDefault();
// });
// $('#close7').on('click', function(e){
//     $('#openModal7').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal7').on('click', function(e){
//     $('#openModal7').removeClass('active');
//     e.preventDefault();
// });

// $('#products').on('click', function(e){
//     $('#openModal8').addClass('active');
//     e.preventDefault();
// });
// $('#close8').on('click', function(e){
//     $('#openModal8').removeClass('active');
//     e.preventDefault();
// });
// $('#fadeModal8').on('click', function(e){
//     $('#openModal8').removeClass('active');
//     e.preventDefault();
// });


// particlesJS('particles-js',
  
//   {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#E2E2E2"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#E2E2E2"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.9,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#E2E2E2",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );
