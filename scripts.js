
var reviewsDiv;
var confirmation;

var form1;
var addReviewForm;

var gameName;
var gameRating;
var gameReview;


function checkRatingRegex(formField)
{
    //validates that field is a number between 1 and 10
    var pattern = /^([1-9]|10)$/;
    return pattern.test(formField.val());
}

function checkReviewRegex(formField)
{
    //validates that field is between 10 and 850 characters of any kind. 
    var pattern = /^[\S\s]{10,850}$/;
    return pattern.test(formField.val());
}

function checkFilled(formField)
{	
	if (formField.val() == "")
	{
		return false;
	}		
	else 
	{
		return true;
	}	
}


var col, row;



function printReviews(json) 
{
        for (i=0; i<json.Result.length; i++) {
                str = "<tr>";
                str += "<td>" + json.Result[i].GameName + "</td>";
                str += "<td>" + json.Result[i].GameRating + "</td>";
                str += "<td>" + json.Result[i].GameReview + "</td>";
                str += "</tr>";
                $('#reviewTable').append(str);
        }
        
        $( ".deleteRow" ).off( "click");
        $( ".deleteRow" ).on( "click",  deleteRow);
}

$(document).ready(function(){
	
      
	confirmation = $("#confirmation");

	addReviewForm = $("#addReviewForm");
	gameName = $("#gameName");	

	gameRating = $("#gameRating");	

	gameReview = $("#gameReview");
        
        $("#reviews").show();
        $("#addReviewForm").hide();
        $("#aboutUs").hide();
        $("#contactUs").hide(); 
        $("#gobackbutton").hide();
       
       //$("#clickMe").click(function(){} instead?
        $(document).on('click', '#readReviews', function() {
            $("#reviews").show();
            $("#addReviewForm").hide();
            $("#aboutUs").hide();
            $("#contactUs").hide();
            $("#gobackbutton").hide();
           
        });
        
        $(document).on('click', '#readAbout', function() {
            $("#reviews").hide();
            $("#addReviewForm").hide();
            $("#aboutUs").show();
            $("#contactUs").hide(); 
            $("#gobackbutton").hide();
           
        });
        
        $(document).on('click', '#readContact', function() {
            $("#reviews").hide();
            $("#addReviewForm").hide();
            $("#aboutUs").hide();
            $("#contactUs").show();
            $("#gobackbutton").hide();
            
        });
        
        $(document).on('click', '#readAdd', function() {
            $("#reviews").hide();
            $("#addReviewForm").show();
            $("#aboutUs").hide();
            $("#contactUs").hide();
            $("#gobackbutton").hide();
            
        });
	
	function NewReview(gameName, gameRating, gameReview)
	{
		this.firstName = gameName;
		this.lastName = gameRating;
		this.email = gameReview;
	}	        
        	 
	$.getJSON( "gameReviewsDB.php", function( json ) {
            //alert("I WORK!");
            //console.log(json);
            printReviews (json);
             
          });
          
        // show revew listing 
        // confirmationMainDiv.show();
        
        $("#reloadMe").click(function(){
            confirmation.empty();
            location.reload();
            $("#gobackbutton").hide();
        })
		
	$("#clickMe").click(function(){
		
                $(".error").removeClass()
		
		$("#gameName_Error").empty();
		$("#gameRating_Error").empty();
                $("#gameRating_regexError").empty();
                $("#gameReview_regexError").empty();
                $("#gameReview_Error").empty();
				
		var readyToDisplay = 1;
		
		if (!checkFilled(gameName))
		{
			$("#gameNameLabel").addClass("error");
			$("#gameName_Error").html("*required");
                        $("#gameName_Error").addClass("error");
			readyToDisplay = 2;			
		}
		if (!checkFilled(gameRating))
		{
			$("#gameRatingLabel").addClass("error");
                        $("#gameRating_Error").html("*required");
			$("#gameRating_Error").addClass("error");
			readyToDisplay = 2;	
		}
		if (!checkFilled(gameReview))
		{
			$("#gameReviewLabel").addClass("error");
			$("#gameReview_Error").addClass("error");
                        $("#gameReview_Error").html("*required");
			readyToDisplay = 2;	
		}
                if (!checkRatingRegex(gameRating))
                {
                        $("#gameRatingLabel").addClass("error");
                        $("#gameRating_regexError").addClass("error");
                        $("#gameRating_regexError").append(" rating must be 1-10");;
			readyToDisplay = 2;	
                    
                } 
                if (!checkReviewRegex(gameReview))
                {
                        $("#gameReviewLabel").addClass("error");
                        $("#gameReview_regexError").append("must be 10-850 characters");;
			readyToDisplay = 2;
                } 
		
		
		if (readyToDisplay === 1)
		{			
			var displayStuff = '<br><h2 class="title">Added:</h2><br>' + gameName.val() + '<br>';
			confirmation.append(displayStuff);
                        
                        //hide the form
                        addReviewForm.hide();
                        $("#gobackbutton").show();
		
			
                        var review1 = new NewReview(gameName.val(), gameRating.val(), gameReview.val());
                        console.log(review1);

                        

                        $.getJSON( "gameReviewsDB.php", { gameName: gameName.val(), gameRating: gameRating.val(), gameReview: gameReview.val(), action: "insert" } , function( json ) {
                            //alert("I WORK!");
                            //console.log(json);
                            $('#reviewTable').html("<tbody><tr><th>Game Name</th><th>Rating</th><th>Review</th></tr></tbody>");
                            printReviews (json);
             
                        });
             
          
		}	 
	}) 
 
	
})






	