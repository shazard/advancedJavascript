
var reviewsDiv;
var confirmationInfoDiv;

var form1;
var formDiv;

var firstName;
var lastName;
var email;
var confirmEmail;
var phone;

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

function checkConfirm(formField1, formField2)
{	
	if (formField1.val() === formField2.val())
	{
		return true;
	}
	else 
	{
		return false;
	}	
}

var col, row;

function deleteRow()
{	
        col = $(this);
        row = $(this).parent().parent();
        row.remove();
        $.getJSON( "addresses.php", {action: "deletePerson", id: col.attr("id").split("_")[1] } );
}

function printPeople(json) 
{
        for (i=0; i<json.Result.length; i++) {
                str = "<tr>";
                str += "<td>" + json.Result[i].fName + "</td>";
                str += "<td>" + json.Result[i].lName + "</td>";
                str += "<td>" + json.Result[i].email + "</td>";
                str += "<td>" + json.Result[i].phone + "</td>";
                str += "<td><input type='button' class='deleteRow' value='delete' id='id_" + json.Result[i].id + "'></td>";
                str += "</tr>";
                $('#peopleTable').append(str);
        }
        //not sure what these do?
        $( ".deleteRow" ).off( "click");
        $( ".deleteRow" ).on( "click",  deleteRow);
}

$(document).ready(function(){
	
      
	//form1 = document.forms.info;
		
	confirmationMainDiv = $("#confirmation");
	//confirmationMainDiv = document.getElementById("confirmation");
	confirmationInfoDiv = $("#info");
	//confirmationInfoDiv = document.getElementById("info");
	formDiv = $("#form");	
	//formDiv = document.getElementById("form");
	firstName = $("#firstName");	
	//firstName = document.getElementById("firstName");
	lastName = $("#lastName");	
	//lastName = document.getElementById("lastName");
	email = $("#email");	
	//email = document.getElementById("email");
	confirmEmail = $("#confirmEmail");	
	//confirmEmail = document.getElementById("confirmEmail");
	phone = $("#phone");	
	//phone = document.getElementById("phone");
	
	function NewAddress(firstName, lastName, email, phone)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}	        
        	 
	$.getJSON( "addresses.php", function( json ) {
            //alert("I WORK!");
            //console.log(json);
            printPeople (json);
             
          });
          
        confirmationMainDiv.show();
		
	$("#clickMe").click(function(){
		
                $(".error").removeClass()
		
		$("#email_Error").empty();
		$("#confirmEmail_Error").empty();
                $("#email_regexError").empty();
                $("#phone_regexError").empty();
		$("#fn_Error").empty();
		$("#ln_Error").empty();
		$("#phone_Error").empty();
		$("#email_Error").empty();
				
		var readyToDisplay = 1;
		
		if (!checkFilled(firstName))
		{
			$("#fNameLabel").addClass("error");
			//document.getElementById("fNameLabel").className="error";
			$("#fn_Error").html("*");
			//document.getElementById("fn_Error").innerHTML = "*";
			readyToDisplay = 2;			
		}
		if (!checkFilled(lastName))
		{
			$("#lNameLabel").addClass("error");
			//document.getElementById("lNameLabel").className="error";
			$("#ln_Error").addClass("error");
			//document.getElementById("ln_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
		if (!checkFilled(email))
		{
			$("#emailLabel").addClass("error");
			//document.getElementById("emailLabel").className="error";
			$("#email_Error").addClass("error");
			//document.getElementById("email_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
                if (!checkEmailRegex(email))
                {
                        $("#emailLabel").addClass("error");
                        $("#email_regexError").append(" not a valid email address");;
			readyToDisplay = 2;	
                    
                } 
                if (!checkPhoneRegex(phone))
                {
                        $("#phoneLabel").addClass("error");
                        $("#phone_regexError").append(" not a valid phone number");;
			readyToDisplay = 2;
                } 
		if (!checkFilled(confirmEmail))
		{
			$("#confEmailLabel").addClass("error");
			//document.getElementById("confEmailLabel").className="error";
			$("#confirmEmail_Error").addClass("error");
			//document.getElementById("confirmEmail_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
		if (!checkFilled(phone))
		{
			$("#phoneLabel").addClass("error");
			//document.getElementById("phoneLabel").className="error";
			$("#phone_Error").addClass("error");
			//document.getElementById("phone_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
		if (! checkConfirm(email, confirmEmail))
		{
			$("#emailLabel").addClass("error");
			//document.getElementById("emailLabel").className="error";
			$("#email_Error").append(" does not match");
			//document.getElementById("email_Error").innerHTML += " does not match";
			$("#confEmailLabel").addClass("error");
			//document.getElementById("confEmailLabel").className="error";
			$("#confirmEmail_Error").append(" does not match");
			//document.getElementById("confirmEmail_Error").innerHTML += " does not match";
			readyToDisplay = 2;			
		}
		
		if (readyToDisplay === 1)
		{			
			var displayStuff = "Added:<br>" + firstName.val() + "&nbsp" + lastName.val() + "<br>" + email.val() + "<br>" + phone.val();
			confirmationInfoDiv.html(displayStuff);
			//confirmationInfoDiv.innerHTML = displayStuff;
			//formDiv.hide();
			//formDiv.style.display = "none";
			confirmationMainDiv.show();
			//confirmationMainDiv.style.display = "block";		
			
                        var address1 = new NewAddress(firstName.val(), lastName.val(), email.val(), phone.val());
                        console.log(address1);

                        //$.getJSON( "addresses.php", { firstName: firstName.val(), lastName: lastName.val(), email: email.val(), phone: phone.val(), action: "insert" } );

                        $.getJSON( "addresses.php", { fName: firstName.val(), lName: lastName.val(), email: email.val(), phone: phone.val(), action: "insert" } , function( json ) {
                            //alert("I WORK!");
                            //console.log(json);
                            $('#peopleTable').html("<tbody><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone</th></tr></tbody>");
                            printPeople (json);
             
                        });
             
          
		}	 
	}) 
 
	
})






	