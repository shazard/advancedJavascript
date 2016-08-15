// JavaScript Document


//change to jquery
//then change to add items to array (no longer dissapear input box) and add each new one to list below
//next week we'll store it locally using JSON
//then after that we'll store in database using PHP


var confirmationMainDiv;
var confirmationInfoDiv;

var form1;
var formDiv;

var firstName;
var lastName;
var email;
var confirmEmail;
var phone;

/*
jquery 

$(document).ready(function{
	***code goes here***
})
*/
window.onload = function()
{
	
	form1 = document.forms.info;
	
	// confirmationMainDiv = $("#confirmation");
	confirmationMainDiv = document.getElementById("confirmation");
	confirmationInfoDiv = document.getElementById("info");	
	formDiv = document.getElementById("form");
	firstName = document.getElementById("firstName");
	lastName = document.getElementById("lastName");
	email = document.getElementById("email");
	confirmEmail = document.getElementById("confirmEmail");
	phone = document.getElementById("phone");
	
}

function checkFilled(formField)
{	
	if (formField.value == "")
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
	if (formField1.value === formField2.value)
	{
		return true;
	}
	else 
	{
		return false;
	}	
}

//jquery  
/*
 instead of having onclick in button use 
 $("#submit").click(function{
	 ***code goes here***	 
 }) 
 */
function getDisplayInfo()
	{
		
		//jquery use $("#error").removeClass()
		document.getElementById("fNameLabel").className="";
		document.getElementById("lNameLabel").className="";
		document.getElementById("emailLabel").className="";
		document.getElementById("confEmailLabel").className="";
		document.getElementById("phoneLabel").className="";
		
		//jquery use $("email_Error").empty();
		document.getElementById("email_Error").innerHTML = "";
		document.getElementById("confirmEmail_Error").innerHTML = "";
				
		var readyToDisplay = 1;
		
		if (!checkFilled(firstName))
		{
			//jquery $("#fNameLabel").addClass("error");
			document.getElementById("fNameLabel").className="error";
			//jquery $("#fn_Error").html("*");
			document.getElementById("fn_Error").innerHTML = "*";
			readyToDisplay = 2;			
		}
		if (!checkFilled(lastName))
		{
			document.getElementById("lNameLabel").className="error";
			document.getElementById("ln_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
		if (!checkFilled(email))
		{
			document.getElementById("emailLabel").className="error";
			document.getElementById("email_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
		if (!checkFilled(confirmEmail))
		{
			document.getElementById("confEmailLabel").className="error";
			document.getElementById("confirmEmail_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
		if (!checkFilled(phone))
		{
			document.getElementById("phoneLabel").className="error";
			document.getElementById("phone_Error").innerHTML = "*";
			readyToDisplay = 2;	
		}
		if (! checkConfirm(email, confirmEmail))
		{
			//jquery $("#emailLabel").addClass("error");
			document.getElementById("emailLabel").className="error";
			//jquery $("#email_Error").append(" does not match")
			document.getElementById("email_Error").innerHTML += " does not match";
			document.getElementById("confEmailLabel").className="error";
			document.getElementById("confirmEmail_Error").innerHTML += " does not match";
			readyToDisplay = 2;			
		}
		
		if (readyToDisplay === 1)
		{
			
			var displayStuff = firstName.value + "&nbsp" + lastName.value + "<br>" + email.value + "<br>" + phone.value;
			//    confirmationInfoDiv.html(displayStuff);
			confirmationInfoDiv.innerHTML = displayStuff;
			// formDiv.hide();
			formDiv.style.display = "none";
			// confirmationMainDiv.show();
			confirmationMainDiv.style.display = "block";
			
		}
	}
	