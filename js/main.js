$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('.about-us').offset().top }, 'slow');
      return false;
    });
  });


let card1 = document.getElementById("card1");
let imgcard1 = document.getElementById("img-card1");
let cardlink1 = document.getElementById("card-link1");

let card2 = document.getElementById("card2");
let imgcard2 = document.getElementById("img-card2");
let cardlink2 = document.getElementById("card-link2");

let card3 = document.getElementById("card3");
let imgcard3 = document.getElementById("img-card3");
let cardlink3 = document.getElementById("card-link3");

let card4 = document.getElementById("card4");
let imgcard4 = document.getElementById("img-card4");
let cardlink4 = document.getElementById("card-link4");

let card5 = document.getElementById("card5");
let imgcard5 = document.getElementById("img-card5");
let cardlink5 = document.getElementById("card-link5");

let card6 = document.getElementById("card6");
let imgcard6 = document.getElementById("img-card6");
let cardlink6 = document.getElementById("card-link6");


card1.onmouseover = function() {
    imgcard1.style.filter = "invert(100%)";
    cardlink1.style.border = "2px solid white";
    cardlink1.style.color = "white";
}
card1.onmouseout = function() {
    imgcard1.style.filter = "invert(0%)";
    cardlink1.style.border = "2px solid black";
    cardlink1.style.color = "black";
}
card2.onmouseover = function() {
    imgcard2.style.filter = "invert(100%)";
    cardlink2.style.border = "2px solid white";
    cardlink2.style.color = "white";
}
card2.onmouseout = function() {
    imgcard2.style.filter = "invert(0%)";
    cardlink2.style.border = "2px solid black";
    cardlink2.style.color = "black";
}
card3.onmouseover = function() {
    imgcard3.style.filter = "invert(100%)";
    cardlink3.style.border = "2px solid white";
    cardlink3.style.color = "white";
}
card3.onmouseout = function() {
    imgcard3.style.filter = "invert(0%)";
    cardlink3.style.border = "2px solid black";
    cardlink3.style.color = "black";
}
card4.onmouseover = function() {
    imgcard4.style.filter = "invert(100%)";
    cardlink4.style.border = "2px solid white";
    cardlink4.style.color = "white";
}
card4.onmouseout = function() {
    imgcard4.style.filter = "invert(0%)";
    cardlink4.style.border = "2px solid black";
    cardlink4.style.color = "black";
}
card5.onmouseover = function() {
    imgcard5.style.filter = "invert(100%)";
    cardlink5.style.border = "2px solid white";
    cardlink5.style.color = "white";
}
card5.onmouseout = function() {
    imgcard5.style.filter = "invert(0%)";
    cardlink5.style.border = "2px solid black";
    cardlink5.style.color = "black";
}
card6.onmouseover = function() {
    imgcard6.style.filter = "invert(100%)";
    cardlink6.style.border = "2px solid white";
    cardlink6.style.color = "white";
}
card6.onmouseout = function() {
    imgcard6.style.filter = "invert(0%)";
    cardlink6.style.border = "2px solid black";
    cardlink6.style.color = "black";
}

let ppcard1 = document.getElementById("pp-card1");
let ppcard2 = document.getElementById("pp-card2");
let ppcard3 = document.getElementById("pp-card3");
let bcb1 = document.getElementById("bottom-card-btn1");
let bcb2 = document.getElementById("bottom-card-btn2");
let bcb3 = document.getElementById("bottom-card-btn3");

ppcard1.onmouseover = function() {
    bcb1.style.backgroundColor = "#00897b";
    bcb1.style.border = "none";
    bcb1.style.color = "white";
    bcb1.style.textTransform ="uppercase";
}
ppcard1.onmouseout = function() {
    bcb1.style.backgroundColor = "#fff";
    bcb1.style.border = "1px solid #212121";
    bcb1.style.color = "#212121";
    bcb1.style.textTransform ="none";
}
ppcard2.onmouseover = function() {
    bcb2.style.backgroundColor = "#00897b";
    bcb2.style.border = "none";
    bcb2.style.color = "white";
    bcb2.style.textTransform ="uppercase";
}
ppcard2.onmouseout = function() {
    bcb2.style.backgroundColor = "#fff";
    bcb2.style.border = "1px solid #212121";
    bcb2.style.color = "#212121";
    bcb2.style.textTransform ="none";
}
ppcard3.onmouseover = function() {
    bcb3.style.backgroundColor = "#00897b";
    bcb3.style.border = "none";
    bcb3.style.color = "white";
    bcb3.style.textTransform ="uppercase";
}
ppcard3.onmouseout = function() {
    bcb3.style.backgroundColor = "#fff";
    bcb3.style.border = "1px solid #212121";
    bcb3.style.color = "#212121";
    bcb3.style.textTransform ="none";
}

$(document).ready(function(){
    $('.team-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        initialSlide: 2,
        swipe: true,
        responsive: [
            {
                breakpoint: 812,
                settings: { 
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }    
        ]
    });
});

$(function() {
    $('.latest-works-btn button').click(function(){
        let get_id = this.id;
        let get_current = $('.btn-pics .' + get_id);

        $('.btn-pick').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#all').click(function() {
        $('.btn-pick').show(500);
    });
});

