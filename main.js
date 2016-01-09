

var options = {
	type: "basic",
	title: "My first popup with Chrome!",
	message: "This is my messagee",
	iconUrl: "favicon.ico"
}
if(5>4) {
	chrome.notifications.create(options, callback);
}
function callback() {
	console.log("Popup Done!");
}


$("a").on("click", function() {

var contact = $("#contact").val();

// window.open("http://localhost","_blank");
$.post( "http://localhost/reminder/reminder.php", {contact: contact}, function(data) {

	console.log("we reached post function");
	alert(data);


});


});
