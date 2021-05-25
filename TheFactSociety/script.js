var d = new Date();
var n = d.getFullYear();
$("footer").html("© " + n + " Fact Society&nbsp&nbsp●&nbsp&nbsp<i>Veritas Occulta</i>");

// Learn more text

$("#learnMore").click(function () {
    revealHiddenStuff();
    $("#headerContainer").css("height", "auto");
    $("#headerContainer").css("overflow", "auto");
    $("header b").css("color", "black");
    $("#learnMore").fadeOut(100);
})

// Project sections

$(".project").hover(function () {
    $(this).find(".projectBackground").toggleClass("updown");
}, function () {
    $(this).find(".projectBackground").toggleClass("updown");
});
// Logo

$("#bigLine").hover(function () {
    revealHiddenStuff();
});

$(window).one("scroll", function() {
    revealHiddenStuff();
});

function revealHiddenStuff() {
    $("#bigLine").css("background-color", "darkred");
    $('#logoContainer').fadeIn(1000);
}
