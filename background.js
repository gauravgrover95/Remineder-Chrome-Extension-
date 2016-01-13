var jquery = require();

console.log("Hi Gaurav!!");
	var die = document.createElement('audio');
        die.setAttribute('src', 'die.mp3');



chrome.alarms.create("MyAlarm", {
	"when": Date.now() + 2000
});

chrome.alarms.onAlarm.addListener(function( alarm ) {
 




	if( alarm.name == "MyAlarm") {
  console.log("Got an alarm!", alarm);


	var options = {
		type: "basic",
		title: "My first popup with Chrome!",
		message: "This is my messagee",
		iconUrl: "favicon.ico", 
		buttons: [
			{

				title: "Stop"
			}
		]
	}


	function callback() {
		console.log("Popup Done!");
	}

	chrome.notifications.create("noti", options, callback);

	    die.play();
}
	
chrome.notifications.onButtonClicked.addListener(function() {

		die.pause();
	});

});