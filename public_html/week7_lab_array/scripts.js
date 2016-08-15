
//check that form field has content
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
//check that content of two form fields match
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

//declare variables to store page components
var confirmationMainDiv;
var confirmationInfoDiv;

var form1;
var formDiv;

var firstName;
var lastName;
var email;
var confirmEmail;
var phone;


$(document).ready(function(){
	
	//when page reaches document ready stage, associate variables with page components
			
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
	

	//object class to hold addres info
	function NewAddress(firstName, lastName, email, phone)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}	
	
	//array to hold addresses
	var programAddressData = [];
	
	//if there's anything in the array, load it onto page with a for loop - not used now at page load but would be if array were pre loaded
	if (programAddressData.length > 0)
	{
		
		var displayExistingStuff = "<br>";
		
		for (i = 0; i < programAddressData.length; i++)
		{
			displayExistingStuff += programAddressData[i].firstName + "&nbsp" + programAddressData[i].lastName + "<br>" + programAddressData[i].email + "<br>" + programAddressData[i].phone;
			displayExistingStuff += "<br><hr><br>";

			
		}
			confirmationInfoDiv.html(displayExistingStuff);
			confirmationMainDiv.show();
	}

	//log the array contents toconsole for debugging
	//console.log(programAddressData);	
	
	//run when "submit" button is clicked
	$("#clickMe").click(function(){		
	
		//remove class for error coloring and any error messages		
		$(".error").removeClass()
		
		$("#email_Error").empty();
		$("#confirmEmail_Error").empty();
		$("#fn_Error").empty();
		$("#ln_Error").empty();
		$("#phone_Error").empty();
		$("#email_Error").empty();
				
		//variable to indicate whether or not any errors have been found, updates will only happen if this stays at 1
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
			$("#email_Error").append(" does not match")
			//document.getElementById("email_Error").innerHTML += " does not match";
			$("#confEmailLabel").addClass("error");
			//document.getElementById("confEmailLabel").className="error";
			$("#confirmEmail_Error").append(" does not match")
			//document.getElementById("confirmEmail_Error").innerHTML += " does not match";
			readyToDisplay = 2;			
		}
		
		if (readyToDisplay === 1)
		{		
						
			//if no errors, show the content div if hidden, load form info into object, add object to array, then load array into content div with a for loop
			
			confirmationMainDiv.show();

			var address1 = new NewAddress(firstName.val(), lastName.val(), email.val(), phone.val());
			
			programAddressData.push(address1);			
			
			var displayNewStuff = "<br>";
			
			for (i = 0; i < programAddressData.length; i++)
			{
				displayNewStuff += programAddressData[i].firstName + "&nbsp" + programAddressData[i].lastName + "<br>" + programAddressData[i].email + "<br>" + programAddressData[i].phone;
				displayNewStuff += "<br><hr><br>";				
			}
			
			confirmationInfoDiv.html(displayNewStuff);
			
			//log array again for debugging
			//console.log(programAddressData);
			
		}	 
	}) 
 
	
})






	