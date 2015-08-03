Parse.initialize("ZOyg51NksyxcHYWfJ1mbDRnOUnB6EpchgzqLPd09", "Zo2Gp5vxkEl4Ls2TFb8rPWHKExWWKDoEr6cNtvpV");
// create a new subclass of Parse.Object.
var MessageData = Parse.Object.extend("TestMessage");

//create new Parse object
parseMsg = new MessageData();

//create submit form function 
$('#messageForm').submit(function(e){
	//on form submit
		e.preventDefault();

		//get data from form
    var data = {
        message: $(e.target).find("[name='message']").val()
    }

	//match the key values from the form, to your parse class, then save it
	parseMsg.save({
	    message: data.message
	}, {
	    //if successful
	    success: function(parseMsg){
	    	alert(parseMsg.get('message') + " successfully saved to Parse.")
	    },

	    error: function(parseMsg, error) {
	        console.log(parseMsg);
	        console.log(error);
	    }
	})
});

//assign trigger to retrieve button to get parseMsg
$( "#btnRetrieve" ).on( "click", function() {
	$("#messageBox").html(parseMsg.get('message'));
});