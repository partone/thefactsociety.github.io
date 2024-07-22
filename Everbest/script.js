var d = new Date();
var n = d.getFullYear();

function sliderio(target) {
    target.slideToggle();
    target.css('display', 'flex');
}

$(document).ready(function () {
    $("footer").html("© " + n + " Everbest&nbsp&nbsp|&nbsp&nbspBetter? Everbest.").css({"text-align": "center"});

    $("#stepByStepButton").click(function () {
        sliderio($("#stepByStep"));
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

    $(".contactUs").click(function () {
        $("#stepByStep").slideUp();
        $("#contact").slideDown();
    });
});
