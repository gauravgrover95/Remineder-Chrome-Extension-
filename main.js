

$("#set").on("click", function() {

var delay = $("#delay-input").val();
var title = $("#title").val();
var desc = $("#desc").val();

// console.log("value of delay is: " + delay);
// console.log(desc);

	var die = document.createElement('audio');
        die.setAttribute('src', 'die.mp3');



chrome.alarms.create("MyAlarm", {
	"when": Date.now() + (delay * 1000)
});

chrome.alarms.onAlarm.addListener(function( alarm ) {
 




	if( alarm.name == "MyAlarm") {
  console.log("Got an alarm!", alarm);


	var options = {
		type: "basic",
		title: title,
		message: desc,
		iconUrl: "favicon.ico"
	}


	function callback() {
		console.log("Popup Done!");
	}

	chrome.notifications.create(options, callback);



    die.play();



}




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





$("#date").on("click", function() {

	console.log("date was clicked");
	$(".date").show();
	$(".delay").hide();
});

$("#delay").on("click", function() {
	console.log("delay was clicked");
	$(".delay").show();
	$(".date").hide();	
});

