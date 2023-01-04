let img_slider = document.getElementsByClassName("img_slider");
console.log(img_slider);

let etape = 0;

let nbr_img = img_slider.length;

let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");

function enleverActiveImage() {
  for (let i = 0; i < nbr_img; i++) {
    img_slider[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbr_img) {
    etape = 0;
  }
  enleverActiveImage();
  img_slider[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbr_img - 1;
  }
  enleverActiveImage();
  img_slider[etape].classList.add("active");
});

setInterval(function(){
  etape++;
  if (etape >= nbr_img) {
    etape = 0;
  }
  enleverActiveImage();
  img_slider[etape].classList.add("active");
  
  
},3000);


// $(document).ready(function(){
//   $('.num').counterUp({
//     time: 1200
//   });
// });

        
$(document).ready(function() {

  $('.counter').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

});  
