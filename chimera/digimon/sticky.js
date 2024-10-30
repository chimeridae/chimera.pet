const facts = [
"looks like faces blooming into nature",
"everything bleeds into everything else...",
"i just wanna live!",
"i just wanna be whatever i am!",
"i'm not asking to be human, i’m just asking to be loved",
"watch out for cars and stairs!",
"let's play online!",
"watch digimon adventure 02!",
"what kind of... digimon are you..?",
"i am so jealous of digimonss life i want to cryy...",
"destroy that castle, imperialdramon!",
"get ryo akiyama out of tamers!",
"appmon was neat, right?",
"we love you, wada kouji!",
"chimera, digivolve to...! chimeramon?"

];

!function newFact() {
  const randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('ticker').innerHTML = facts[randomFact];
}();

window.onscroll = function() {myFunction()};

var navigation = document.getElementById("navigation");
var sticky = navigation.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
}






  

