

$("#set").on("click", function() {





var obj = {

delay : $("#delay-input").val(),
title : $("#title").val(),
desc : $("#desc").val()

}


chrome.runtime.sendMessage(obj);

//sending data to server

var contact = $("#contact").val();

// window.open("http://localhost","_blank");
$.post( "http://localhost/reminder/reminder.php", {contact: contact}, function(data) {

	console.log("we reached post function");


});

});


// switch alarm mode
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

