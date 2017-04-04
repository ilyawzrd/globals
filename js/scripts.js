// Advantages of server //

$('.accord-text').hide();
$('.accord').on('click',function () {
    $(this).children('.accord-text').slideToggle('slow');
});


$('.advantage-left-column li').hover(function () {
    $(this).css("list-style-image","url('img/arrow-hover.png')");
}, function () {
    $(this).css("list-style-image","url('img/arrow.png')");
});

////

// Scroll до навигации

$('footer .circle').click(function () {
    window.scrollTo(0,0);
});

// Follow us ( Hosting-hover)
$('.hosting li').hover(function () {
    $(this).css("list-style-image","url('img/arrow-footer-icon-blue.png')");
}, function () {
    $(this).css("list-style-image","url('img/arrow-footer-icon.png')");
});

// Follow us ( Useful-links-hover)
$('.useful-links li').hover(function () {
    $(this).css("list-style-image","url('img/arrow-footer-icon-blue.png')");
}, function () {
    $(this).css("list-style-image","url('img/arrow-footer-icon.png')");
});

// Follow us (Form-hover)

$('.email-newsletters-column input').focus(function () {
    $(this).parents('.form-group').css("border-color","#00bff3");
});
$('.email-newsletters-column input').focusout(function () {
    $(this).parents('.form-group').css("border-color","#9699a6");
});

