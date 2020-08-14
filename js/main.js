$(function () {
    // Пустые ссылки
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
    // -----------------------------------------------------------------------------------------------------------------
    // Масштабируемые картинки
    $(".img-scalable").each(function () {
        var box = $(this).find(".img-box"),
            k = parseInt(box.css("max-width"), 10) / parseInt(box.css("max-height"), 10)
        ;
        $(document).ready(function () {
            box.height(box.width() / k);
        });
        $(window).resize(function () {
            box.height(box.width() / k);
        });
    });
    // -----------------------------------------------------------------------------------------------------------------
    // Мобильное меню
    function mobileMenu(e) {
        var nav = $("#header nav"),
            ul_height = $("#header nav ul").outerHeight(true) + "px",
            old_height = parseInt(nav.css("max-height")),
            new_height;

        if (e.type === 'click') {
            new_height = old_height > 0 ? 0 : ul_height;
        } else {
            new_height = old_height > 0 ? ul_height : 0;
        }

        if ($("a.bars").css("display") === "none") {
            new_height = ul_height;
        }

        nav.css("max-height", new_height);
    }

    $("a.bars").click(mobileMenu);
    $(window).resize(mobileMenu);
    // -----------------------------------------------------------------------------------------------------------------
    // Слайдер
    $(".slider").bxSlider({
        mode: "horizontal",
        captions: false,
        pager: false
    });
    // -----------------------------------------------------------------------------------------------------------------
    // Вкладки Tabs
    $(".tab-title li:not(.active)").click(function () {

        var target = $(this).find("a").attr("href");

        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");

        $(target).parent().find(".active").removeClass("active");
        $(target).addClass("active");
    });

    $(".tab-title li a").click(function (e) {
        e.preventDefault();
    });
    $(".tab-title li:first-child").click();
    // -----------------------------------------------------------------------------------------------------------------
    // Cкролл по якорям
    $(".anchor").click(function (e) {
        e.preventDefault();

        var id = $(this).attr("href"),
            top = $(id).offset().top;

        $("body, html").animate({
            scrollTop: top
        }, 1500);
    });
});
