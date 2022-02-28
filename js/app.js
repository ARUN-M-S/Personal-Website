

$(document).ready(function () {
  // particles background
  particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
  });
  
  
  //toggle menu visibility
  $("#js-navbar-toggle").on("click", function () {
   $("#js-menu").toggleClass('active');
  });
  
    // smooth scrolls to sections
    $('nav a[href*="#"]').not("#blog").on("click", function () {
      $("#js-menu").toggleClass('active');
   $("html, body").animate({
  scrollTop: $($(this).attr("href")).offset().top
   }, 500);
    });
  
  
    // landingbutton scroll
    $(".landingbtn").on("click", function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
         }, 500);
     });
  
    
  // show portfolio item extra content
   $(".expandDetails").on("click", function () {
    $(this).parent().siblings(".portfolio-long").slideToggle(500);
    $(this).children(".arrowDown").toggle();
    $(this).children(".arrowUp").toggle();
    });
  
  
  // smooth scroll back up
    $("#up").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
         }, 1000); 
    });
  
    // animations
    AOS.init({
      easing: "ease",
      duration: 1200,
      once: true
    })
  
  
  });
  
  
  
  








// type effect source from: https://codepen.io/bradtraversy/pen/jeNjwP
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 150;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}




// new slider

// var swiper = new Swiper('.swiper-container', {
//       effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows : true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//       },
//     });