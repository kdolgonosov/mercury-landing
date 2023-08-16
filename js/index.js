const faqList = document.querySelectorAll('.faq__list_item');
const newsList = document.querySelectorAll('.news__grid-item');
const startOfPage = document.querySelector('.header');
const goToTopButton = document.querySelector('.footer__down_gototop');
const mobileMenuButton = document.querySelector('.header__mobile-menu-button');
const mobileMenu = document.querySelector('.navbar_type_mobile');

faqList.forEach((e) => {
    e.addEventListener('click', handleExpandFaq);
});
newsList.forEach((e) => {
    e.addEventListener('click', handleExpandNews);
});
goToTopButton.addEventListener('click', handleGoToTop);
mobileMenuButton.addEventListener('click', handleOpenMobileMenu);
function handleExpandFaq() {
    this.querySelector('.faq__list_item-content').classList.toggle(
        'faq__list_item-content_type_expanded',
    );
    this.querySelector('.faq__list_item-button').classList.toggle(
        'faq__list_item-button_type_expanded',
    );
}
function handleExpandNews() {
    console.log(this.querySelector('.news__grid-item-text'));
    this.querySelector('.news__grid-item-text').classList.toggle(
        'news__grid-item-text_type_expanded',
    );
    this.querySelector('.news__grid-item-footer').classList.toggle(
        'news__grid-item-footer_type_expanded',
    );
    this.parentNode.classList.toggle('news__grid-item_type_expanded');
    this.querySelector('.news__grid-item-img').classList.toggle(
        'news__grid-item-img_type_expanded',
    );
    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function handleGoToTop() {
    startOfPage.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
function handleOpenMobileMenu() {
    mobileMenu.classList.toggle('navbar_type_mobile_opened');
}
//
$(function () {
    $('.events__carousel').slick({
        arrows: false,
        mobileFirst: true,
        dots: true,
        infinite: false,
        centerMode: true,
        centerPadding: '100px',
        // focusOnSelect: true,
        slidesToShow: 1,
        initialSlide: 2,
        // rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            // {
            //     breakpoint: 601,
            //     settings: {
            //         slidesToShow: 1,
            //     },
            // },
        ],
    });
    $('.events__carousel_type_other').slick({
        arrows: false,
        dots: true,
        infinite: false,
        // centerMode: true,
        centerPadding: '100px',
        // focusOnSelect: true,
        slidesToShow: 4,
        // initialSlide: 2,
        // rows: 1,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animate__animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true, // default
    });
    wow.init();
});
