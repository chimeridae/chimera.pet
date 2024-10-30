//from: https://stackoverflow.com/questions/9162933/make-iframe-height-dynamic-based-on-content-inside-jquery-javascript/9163087
function resizeiFrame(iFrame) {
  if (document.getElementById("main")) {
    document.getElementById("main").innerHTML = iFrame.contentWindow.document.title;
  }
  iFrame.height = iFrame.contentWindow.document.body.scrollHeight + "px";
}