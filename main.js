var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
var slideIdx = 1;
// showSlide(slideIdx);

function plusSlides(n) {
  showSlide(slideIdx += n);
}

function currentSlide(n) {
  showSlide(slideIdx = n);
}

function showSlide(n) {
  var i;
  var slide = document.getElementsByClassName("mySlide");
  if (n > slide.length) {slideIdx = 1}
  if (n < 1) {slideIdx = slide.length}
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
 
  slide[slideIdx-1].style.display = "block";
}

function openModalVideo(){
  document.getElementById("vModal").style.display = "block";
}

function closeVideoModal(){
  document.getElementById("vModal").style.display = "none";
}
var sIdx = 1;
function addSlide(n) {
  showVideoSlide(sIdx += n);
}

function currentVideoSlide(n){
  showVideoSlide(sIdx = n);
}

function showVideoSlide(n) {
  var i;
  var vslide = document.getElementsByClassName("videoSlide");
  if (n > vslide.length) {sIdx = 1}
  if (n < 1) {sIdx = vslide.length}
  for (i = 0; i < vslide.length; i++) {
      vslide[i].style.display = "none";
  }
 
  vslide[sIdx-1].style.display = "block";
}

function stopVideoModal() { 
  for(let i=0;i<4;i++){
    var iframe = document.getElementsByTagName("iframe")[i].contentWindow;
    iframe.postMessage('{"event":"command","func":"'+'stopVideo'+   '","args":""}', '*');
  }
}