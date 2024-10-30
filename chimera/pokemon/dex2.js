var entry= new Array(); 
entry[0]="sprites/hgss/dex/152.png";       
entry[1]="sprites/hgss/dex/153.png";
entry[2]="sprites/hgss/dex/154.png";

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementsByClassName("pkmn").style.background = 'url(' + entry[ImageCnt] + ')';
  }