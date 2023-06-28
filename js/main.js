// Nav Icon

const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');
const btn = document.querySelector('.btn-2--header');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    btn.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
}

$('.carousel').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    variableWidth: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<div class="slick__arrow slick-prev"><img src="./img/testimonials/left.png" alt=""></div>',
    nextArrow: '<div class="slick__arrow slick-next"><img src="./img/testimonials/right.png" alt=""></div>',
});

$('.carousel__testimonials').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    variableWidth: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<div class="slick__arrow slick-prev testimonials-prev"><img src="./img/testimonials/left.png" alt=""></div>',
    nextArrow: '<div class="slick__arrow slick-next testimonials-next"><img src="./img/testimonials/right.png" alt=""></div>',
});

$('.carousel__blogs').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    variableWidth: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<div class="slick__arrow slick-prev testimonials-prev"><img src="./img/testimonials/left.png" alt=""></div>',
    nextArrow: '<div class="slick__arrow slick-next testimonials-next"><img src="./img/testimonials/right.png" alt=""></div>',
});




$('slick-prev').on('click', function() {
    $('.carousel').slick('slickPrev');
  });
  
  $('slick-next').on('click', function() {
    $('.carousel').slick('slickNext');
});


const slider = $('.slick-slider');

function applyStyles() {
  $('.slick-slide').each(function() {
    $(this).css('backgroundColor', 'white');
    $(this).find('.title-4, .text-3--mt').css('color', 'black');
    $(this).find('.btn-2--room').css('backgroundColor', 'white');
    $(this).find('.bottom__one--rooms, .bottom__two--rooms').css('backgroundColor', 'white');
  });
}

function resetStyles() {
  $('.slick-slide').each(function() {
    $(this).css('backgroundColor', '');
    $(this).find('.title-4, .text-3--mt').css('color', '');
    $(this).find('.btn-2--room').css('backgroundColor', '');
    $(this).find('.bottom__one--rooms, .bottom__two--rooms').css('backgroundColor', '');
  });
}

function checkWindowSize() {
  if (window.innerWidth <= 1300) {
    applyStyles();
  } else {
    resetStyles();
  }
}

slider.on('afterChange', function(event, slick, currentSlide) {
  checkWindowSize();
});

checkWindowSize();
$(window).on('resize', checkWindowSize);


$('#signUpBtn').on('click', popupOpen);
    $('#signUpBtn').on('click', popupOpen);
    $('.popup__close').on('click', () => {
        $('.popup').removeClass('popup__active');
        $('body').css('overflow', 'visible'); 
         
    })
    function popupOpen() {
        $('.popup').addClass('popup__active');
        $('body').css('overflow', 'hidden');
        $('.container').css('overflow', 'hidden');
    }  


    
$(function() {
    $("#arrival-date").datepicker({
      dateFormat: "dd M, yy",
      minDate: 0,
      onSelect: function(dateText, inst) {
        var date = $(this).datepicker('getDate');
        var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
        var formattedDate = $.datepicker.formatDate('dd M, yy', date);
        var htmlDate = '<span class="day">' + formattedDate + '</span><br><span class="weekday">' + dayOfWeek + '</span>';
        $("#formatted-date-arrival").html(htmlDate);
        
        var arrivalDate = $(this).datepicker('getDate');
        $("#departure-date").datepicker("option", "minDate", arrivalDate);
      }
    });
  
    $("#departure-date").datepicker({
      dateFormat: "dd M, yy",
      minDate: 0,
      onSelect: function(dateText, inst) {
        var date = $(this).datepicker('getDate');
        var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
        var formattedDate = $.datepicker.formatDate('dd M, yy', date);
        var htmlDate = '<span class="day">' + formattedDate + '</span><br><span class="weekday">' + dayOfWeek + '</span>';
        $("#formatted-date-departure").html(htmlDate);
        
        var departureDate = $(this).datepicker('getDate');
        $("#arrival-date").datepicker("option", "maxDate", departureDate);
      }
    });

    $("#arrival-img").click(function() {
        $("#arrival-date").datepicker("show");
    });

    $("#departure-img").click(function() {
        $("#departure-date").datepicker("show");
    });
});


document.addEventListener('DOMContentLoaded', function() {
  let inputs = document.querySelectorAll('.menu__childrens-adults');

  inputs.forEach((input, i) => {
      input.value = 0;
      input.readOnly = true;
  });

  document.querySelectorAll('.menu__container').forEach(container => {
      container.addEventListener('click', function(event) {
          if(event.target.classList.contains('add')) {
              let input = event.target.previousElementSibling;
              if(input.value < 9) {
                  input.value = parseInt(input.value) + 1;
              }
          }
          else if(event.target.classList.contains('subtraction')) {
              let input = event.target.nextElementSibling;
              if(input.value > 0) {
                  input.value = parseInt(input.value) - 1;
              }
          }
      });
  });
});





$("#checkAvailability").click(function() {
  let arrivalDate = $("#arrival-date").datepicker("getDate");
    let departureDate = $("#departure-date").datepicker("getDate");
    let inputs = document.querySelectorAll('.menu__childrens-adults');
    let adults = parseInt(inputs[0].value);
    let children = parseInt(inputs[1].value);
    let totalGuests = adults + children;

    if (!arrivalDate || !departureDate) {
      $("#warning").text("Please select arrival and departure dates.").show();
    } else if (totalGuests === 0) {
      $("#warning").text("Please select at least one guest.").show();
    } else {
      $("#warning").hide();

    // Имитация проверки доступности
    let isAvailable = Math.random() > 0.5;

    let template = document.getElementById('overlayTemplate');
    let overlay = template.content.cloneNode(true);

    let messageElement = overlay.querySelector('#message');
    if (isAvailable) {
      messageElement.textContent = `Room is available for ${totalGuests} guests.`;
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = `Room is not available for ${totalGuests} guests.`;
      messageElement.style.color = 'red';
    }

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden'; // Блокировка прокрутки страницы

    document.getElementById('closeOverlay').addEventListener('click', function() {
      document.body.removeChild(document.querySelector('.overlay'));
      document.body.style.overflow = 'auto'; // Разблокировка прокрутки страницы
    });
  }
});








  
  
  
  
  



  

  
  























//   //   currentSlideElement.find('.title-4, .text-3--mt').css('color', 'white');
//   //   currentSlideElement.find('.btn-2--room').css('backgroundColor', '#2C4664');
//  //   currentSlideElement.find('.bottom__one--rooms, .bottom__two--rooms').css('backgroundColor', '#2C4664');













 
