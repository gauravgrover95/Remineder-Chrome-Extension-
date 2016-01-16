// var jquery = require();


chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {

// alert(response.delay);


console.log("Hi Gaurav!!");
	var die = document.createElement('audio');
        die.setAttribute('src', 'die.mp3');



chrome.alarms.create("MyAlarm", {
	"when": Date.now() + (response.delay * 1000 * 60)
});

chrome.alarms.onAlarm.addListener(function( alarm ) {

	if( alarm.name == "MyAlarm") {
  console.log("Got an alarm!", alarm);


	var options = {
		type: "basic",
		title: response.title,
		message: response.desc,
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







});
