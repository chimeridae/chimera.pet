
document.writeln('<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>');
fetch("https://status.cafe/users/chimera/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/chimera" target="_blank">' + r.author + '</a> ' + 'said...' 
    document.getElementById("statuscafe-content").innerHTML = '"' + r.content + '"' + ' <img src="003r.gif"> ' + r.timeAgo + ' <img src="furretright.gif">'
  })
