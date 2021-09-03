

$(document).ready(function(){
    $('.slide2').owlCarousel({
    margin:30,
    items:5,
    dots: false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        600 : {
            items: 3
        },
        // breakpoint from 768 up
        1000 : {
            items: 5
        }
    }
});
var owl = $('.slide2');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn2').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});


$(document).ready(function(){
    $('.slide3').owlCarousel({
    margin:30,
    items:5,
    dots: false,
    responsive : {
        // breakpoint from 0 up
        0 : {
            items:1
        },
        // breakpoint from 480 up
        600 : {
            items: 3
        },
        // breakpoint from 768 up
        1000 : {
            items: 5
        }
    }
});
var owl = $('.slide3');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn3').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn3').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});






// custom script

var openuser = document.getElementById("open-user");
var closeuser = document.getElementById("back");
var userpfofile = document.getElementById("user");
openuser.addEventListener("click", function(){
    user.classList.toggle("active");
});
closeuser.addEventListener("click", function(){
    user.classList.remove("active");
});



closeuser.addEventListener("click", function(){
    this.parentElement.classList.remove("active");
});

