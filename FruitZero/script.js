var d = new Date();
var n = d.getFullYear();
$("footer").html("© " + n + " Fact Society&nbsp&nbsp●&nbsp&nbsp<i>Veritas Occulta</i>");
$(".cryptoCurrency").hide();
$("#loadingOverlay").hide();

$(document).ready(function () {
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
    });

    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='currency']:checked").val();
        if(radioValue == 'btc'){
            $("#3months").children(".planCost").children("span").text("180");
            $("#6months").children(".planCost").children("span").text("95");
            $("#12months").children(".planCost").children("span").text("59");
            $(".planFooter").fadeOut();
            $(".cryptoCurrency").fadeIn();
        } else {
            $("#3months").children(".planCost").children("span").text("$29.99");
            $("#6months").children(".planCost").children("span").text("$15.99");
            $("#12months").children(".planCost").children("span").text("$9.99");
            $(".planFooter").fadeIn();
            $(".cryptoCurrency").fadeOut();
        }
    });

    $(".chooseButton").click(function() {
        $("#loadingOverlay").fadeIn();
    });

    $("#howItWorks").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#productIntro").offset().top
        }, 800);
    });

    $("#orderNow").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#plansSection").offset().top
        }, 800);
    });

    $("#aboutUs").click(function() {
        window.open('http://www.thefactsociety.org/', '_blank');
    });
});
