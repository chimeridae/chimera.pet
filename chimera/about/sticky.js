

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
	// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
	// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code
	
	//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
	//** Call: uniquevar.playclip() to play sound
	
	var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
    }
    
    function createsoundbite(sound){
    var html5audio=document.createElement('audio')
    if (html5audio.canPlayType){ //check support for HTML5 audio
    for (var i=0; i<arguments.length; i++){
    var sourceel=document.createElement('source')
    sourceel.setAttribute('src', arguments[i])
    if (arguments[i].match(/\.(\w+)$/i))
    sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
    html5audio.appendChild(sourceel)
    }
    html5audio.load()
    html5audio.playclip=function(){
    html5audio.pause()
    html5audio.currentTime=0
    html5audio.play()
    }
    return html5audio
    }
    else{
    return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
    }
    }
    
    //Initialize two sound clips with 1 fallback file each:
    
  var mouseoversound=createsoundbite("https://file.garden/ZgSP2Yo9YF7Ec9o7/0216%20-%20Open%20Outside%20Menu%20With%20Start.mp3")
  var clicksound=createsoundbite("https://file.garden/ZgSP2Yo9YF7Ec9o7/0217%20-%20Back%20To%20Game.mp3")





  

