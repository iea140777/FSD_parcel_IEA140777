$(".header__header-menu__list-item:nth-of-type(2)").click(function(){
    $(".header__header-menu__services").toggle();
    $(".header__header-menu__list-item:nth-of-type(2) .header-menu__open-icon").toggleClass("header-menu__close-icon");
});

$(".header__header-menu__list-item:nth-of-type(5)").click(function(){
    $(".header__header-menu__agreements").toggle();
    $(".header__header-menu__list-item:nth-of-type(5) .header-menu__open-icon").toggleClass(" header-menu__close-icon");
});

$(".header-mobile__icon").click(function(){
    $(".header-mobile__menu-list").css('display', 'block');
    $(".header-mobile__icon").toggle();
    $(".header-mobile__icon-close").toggle();
});

$(".header-mobile__icon-close").click(function(){
    $(".header-mobile__menu-list").css('display', 'none');
    $(".header-mobile__icon").toggle();
    $(".header-mobile__icon-close").toggle();
});