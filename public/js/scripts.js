$(function () {
    $(".myleftmenu li").click(function () {

        $(this + '.myleftmenu_child').toggle();

        return false;
    });
});