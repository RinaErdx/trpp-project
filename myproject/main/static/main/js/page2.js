let lastScroll = 0;
const defaultOffser = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide()) {
        // scroll down
        header.classList.add('hide')
        console.log('down');
    }
    else if((scrollPosition() < lastScroll && containHide())) {
        // scroll up
        header.classList.remove('hide')
        console.log('up');
    }
    lastScroll = scrollPosition();
})

// popup
// скрытие элемента

$('.modal-close').click(
    function() {
        $('.modal').fadeOut();
    }
);

$('.us-bottom p').click(
    function() {
        $('.modal').css('display','block');
    }
);
// закрашивание
function HoverOn(){
    document.getElementById("div_right").classList.add("active")
}
function HoverOff(){
    document.getElementById("div_right").classList.remove("active")
}
AOS.init();