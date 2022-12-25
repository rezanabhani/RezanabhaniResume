const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["طراح", "فریلنسر", "توسعه دهنده"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


$('#show').click(function() {
  $('#about').fadeIn(400);
  $('#resume').fadeOut(400);
  $('#home').fadeOut(400);
  $('#simplbar-mask').fadeOut(400);
  $('#blog').fadeOut(400);
  $('#contact').fadeOut(400);

  $('#about').removeClass('d-none');

});

$('#click').click(function() {
  $('#home').fadeIn(400);
  $('#about').fadeOut(400);
  $('#resume').fadeOut(400);
  $('#simplbar-mask').fadeOut(400);
  $('#blog').fadeOut(400);
  $('#contact').fadeOut(400);



});
$('#resumeshow').click(function() {
  $('#resume').fadeIn(400);
  $('#about').fadeOut(400);
  $('#home').fadeOut(400);
  $('#simplbar-mask').fadeOut(400);
  $('#blog').fadeOut(400);
  $('#contact').fadeOut(400);

  $('#resume').removeClass('d-none');


});
$('#simplbar-mask-show').click(function() {
  $('#simplbar-mask').fadeIn(400);
  $('#about').fadeOut(400);
  $('#home').fadeOut(400);
  $('#resume').fadeOut(400);
  $('#blog').fadeOut(400);
  $('#contact').fadeOut(400);

  $('#simplbar-mask').removeClass('d-none');


});
$('#blog-show').click(function() {
  $('#blog').fadeIn(400);
  $('#about').fadeOut(400);
  $('#home').fadeOut(400);
  $('#resume').fadeOut(400);
  $('#simplbar-mask').fadeOut(400);
  $('#contact').fadeOut(400);

  $('#blog').removeClass('d-none');


});
$('#contact-show').click(function() {
  $('#contact').fadeIn(400);
  $('#about').fadeOut(400);
  $('#home').fadeOut(400);
  $('#resume').fadeOut(400);
  $('#simplbar-mask').fadeOut(400);
  $('#blog').fadeOut(400);

  $('#contact').removeClass('d-none');


});





