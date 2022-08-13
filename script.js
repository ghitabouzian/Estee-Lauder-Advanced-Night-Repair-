


var slideIndex = 1;
var t;

showSlides(slideIndex);

function plusSlides(n) {

  slideIndex = slideIndex + n;
  clearTimeout(t);
  showSlides(slideIndex);
  console.log(slideIndex);
}

function currentSlide(n) {

  showSlides(slideIndex = n);

}

function showSlides(n) {

  var i;

  var slides = document.getElementsByClassName("mySlides");

  if (n == undefined) {
    n = ++slideIndex;
  }

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }



  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

  }

  slides[slideIndex - 1].style.display = "block";

  t = setTimeout(showSlides, 5000);

}
// Review form js
var secretContainer=$('.secretContainer');

$(document).ready(function(){

$("input[type='button']").click(chooseReview);

  function chooseReview(){
    var fieldOneValue = $("input[name='question1']").val()
    var questionOneValue = $("input[name='question2']:checked").val()
    var reviewValue = $("input[name='review']").val()
    secretContainer.append(` <h2>Thank you for your review!`);
    console.log("Thanks")
    
    
  }
  






  
})


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

var textField = $('.submissionField');
var nameField = $('.nameField');
var submitButton = $('.submissionButton');
var taskList = $('.list');

submitButton.on("click", addTaskCard);


function addTaskCard(event) {
  event.preventDefault();

taskList.append(`
    <p>Submission was succesful</p>
   `);
}