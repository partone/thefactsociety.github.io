var d = new Date();
var n = d.getFullYear();

function sliderio(target) {
    target.slideToggle();
    target.css('display', 'flex');
}

$(document).ready(function () {
    $("footer").html("© " + n + " Everbest&nbsp&nbsp|&nbsp&nbspBetter? Everbest.").css({"text-align": "center"});

    $("#learnHow").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#explanation").offset().top - 80
        }, 1000);
    });

    $("#stepByStepButton").click(function () {
        sliderio($("#stepByStep"));
        $("#contact").slideUp();
    });

    $("#prior").click(function () {
        $("#priorDrawer").slideToggle();
    });
    $("#dayOf").click(function () {
        $("#dayOfDrawer").slideToggle();
    });
    $("#after").click(function () {
        $("#afterDrawer").slideToggle();
    });

    $(".contactButton").click(function () {
        $("#stepByStep").slideUp();
        $("#contact").slideDown();
    });
});
