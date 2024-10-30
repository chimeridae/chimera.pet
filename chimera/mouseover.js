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
    
  var mouseoversound=createsoundbite("https://64.media.tumblr.com/5a5d7bbeba19f7ad1b812d5d87472b26/ce0fd7e5292a70b6-8c/68f1227ad2c6cca5b244596c6b9967d13c156824.mp3")
  var clicksound=createsoundbite("https://64.media.tumblr.com/d5f9151b82b6f3c75b29da729eede8a2/a72d8a0a493230fe-fb/063f39db4be3df6d96d12d0776d54594c25d8db5.mp3")

  

