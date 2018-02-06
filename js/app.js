//to-do list
//get the input from the page getElementById
//create event listener for space bar being pressed
//parse content of input back until last space
//replace those characters with "harvest "
//do it all over again

var mouseThoughts = document.getElementById('main');
var squeek

console.log(mouseThoughts);

window.addEventListener("keydown", startTheHarvest);

function startTheHarvest(e) {
    if (e.keyCode == "32") {
			mouseThoughts.value = mouseThoughts.value.substring(0, mouseThoughts.value.lastIndexOf(" ")+1) + "harvest";
    }
}

//https://stackoverflow.com/questions/9323182/how-to-remove-the-last-word-in-the-string-using-javascript
//https://www.kirupa.com/html5/keyboard_events_in_javascript.htm
