$(".p-sidebar").click(function() {
    $(this).toggleClass("is-open");
    $(".p-sidebar__menu__wrap").toggleClass("is-open");
    $(".p-sidebar__back").toggleClass("is-open");
    $("body").toggleClass("is-open");
});
$(".p-sidebar__back").click(function() {
    $(this).toggleClass("is-open");
    $(".p-sidebar__menu__wrap").toggleClass("is-open");
    $(".p-sidebar").toggleClass("is-open");
    $("body").toggleClass("is-open");
});