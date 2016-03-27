var leftButton = $('#btn-left');
var rightButton = $('#btn-right');
var currentIndex = 0;
var container = $('#container');
var slides = container.children();

function changeSlides() {
    if (currentIndex === 0) {
        slides[0].className = "inactive";
        slides[2].className = "active";
        currentIndex = 2;
    } else if (currentIndex === 1) {
        slides[1].className = "inactive";
        slides[0].className = "active";
        currentIndex = 0;
    } else {
        slides[2].className = "inactive";
        slides[1].className = "active";
        currentIndex = 1;
    }
    //$(slides[currentIndex]).slideDown('slow');
}

$(leftButton).on("click", changeSlides);

$(rightButton).on("click", function () {
    if (currentIndex === 0) {
        slides[0].className = "inactive";
        slides[1].className = "active";
        currentIndex = 1;
    } else if (currentIndex === 1) {
        slides[1].className = "inactive";
        slides[2].className = "active";
        currentIndex = 2;
    } else {
        slides[2].className = "inactive";
        slides[0].className = "active";
        currentIndex = 0;
    }
});

setInterval(changeSlides, 5000);