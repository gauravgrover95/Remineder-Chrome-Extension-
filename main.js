

$("#set").on("click", function() {



console.log("Hi Gaurav!!");

	var die = document.createElement('audio');
        die.setAttribute('src', 'die.mp3');



chrome.alarms.create("MyAlarm", {
	"when": Date.now() + 5000
});

chrome.alarms.onAlarm.addListener(function( alarm ) {
 




	if( alarm.name == "MyAlarm") {
  console.log("Got an alarm!", alarm);


	var options = {
		type: "basic",
		title: "My first popup with Chrome!",
		message: "This is my messagee",
		iconUrl: "favicon.ico"
	}


	function callback() {
		console.log("Popup Done!");
	}

	chrome.notifications.create(options, callback);



    die.play();



}


	function stop("noti", 1) {

		die.pause();
	}

chrome.notifications.onButtonClicked.addListener(stop);



});



$("#stop").on("click", function() {
	console.log("stop was clicked");
	die.pause();
});






















var contact = $("#contact").val();

// window.open("http://localhost","_blank");
$.post( "http://localhost/reminder/reminder.php", {contact: contact}, function(data) {

	console.log("we reached post function");


});


});
