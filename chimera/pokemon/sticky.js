const facts = [
"many bodies form a strange creature",
"looks like faces blooming into nature",
"everything bleeds into everything else...",
"i just wanna live!",
"i just wanna be whatever i am!",
"i'm not asking to be human, i’m just asking to be loved",
"i'm a quiet bitch i just do my own thing :)",
"dehumanize yourself and face to bloodshed",
"i am a therapy dog!",
"step away from my dr pepper!",
"let's play outside!",
"watch digimon adventure 02!",
"what kind of pokemon are you?",
"i am so jealous of dogss life i want to cryy...",
"dragon energy coursing through my veins",
"don't localize mother 3!",
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






  
