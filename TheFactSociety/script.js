var d = new Date();
var n = d.getFullYear();
$("footer").html("© " + n + " Fact Society&nbsp&nbsp●&nbsp&nbsp<i>Veritas Occulta</i>&nbsp&nbsp●&nbsp&nbspinfo@thefactsociety.org");

// Learn more text

$("#learnMore").click(function () {
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
