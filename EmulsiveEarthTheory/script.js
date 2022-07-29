var d = new Date();
var n = d.getFullYear();
$("footer").html("© " + n + " Fact Society&nbsp&nbsp●&nbsp&nbsp<i>Veritas Occulta</i>&nbsp&nbsp●&nbsp&nbspinfo@thefactsociety.org");

const words = ["Pro-life or Pro-choice?", "Liberal or Conservative?", "Capital Punishment or Life Sentence?", "One-state Solution or Two-state Solution?", "Flat Earth or Round Earth?", "Legalisation or Prohibition?", "Free Market or Economic Regulation?", "Paper or Plastic?", "Anti-vax or Pro-vax?"]
let currentIndex = 0;

setInterval(function(){
  $(".carouselWord").animate({'opacity':'0', 'margin-top':'30px'}, 500);
  $(".carouselWord").animate({'opacity':'1', 'margin-top':'0px'}, 1750);
  $(".carouselWord").animate({'opacity':'0', 'margin-top':'-50px'}, 500, function() {
  currentIndex++;
  if(currentIndex >= words.length) {
    currentIndex = 0;
  }
  $(".carouselWord").text(words[currentIndex])
  });
}, 10);
