

/*check for local storage
take data and put in object
stringify data and save to local storage

on page load check for existing local storage
then fill array from local storage if it's there

*/


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
	
	
	//localStorage.clear();
	
	function NewAddress(firstName, lastName, email, phone)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}	
	
	var programAddressData = [];
	
	if (localStorage.getItem("addressArray") != null)
	{
                //replace below line with get function from database
		programAddressData=JSON.parse(localStorage.getItem("addressArray"));
		var displayExistingStuff = "<br>";
		
		for (i = 0; i < programAddressData.length; i++)
		{
			displayExistingStuff += programAddressData[i].firstName + "&nbsp" + programAddressData[i].lastName + "<br>" + programAddressData[i].email + "<br>" + programAddressData[i].phone;
			displayExistingStuff += "<br><hr><br>";

			
		}
			confirmationInfoDiv.html(displayExistingStuff);
			confirmationMainDiv.show();
	}

	console.log(programAddressData);
	console.log(localStorage.getItem("addressArray") );
	
	
	
	
	

	
	
	
	$("#clickMe").click(function(){
		
		
		
		$(".error").removeClass()
		
		$("email_Error").empty();
		$("confirmEmail_Error").empty();

				
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
			var displayStuff = firstName.val() + "&nbsp" + lastName.val() + "<br>" + email.val() + "<br>" + phone.val();
			confirmationInfoDiv.html(displayStuff);
			//confirmationInfoDiv.innerHTML = displayStuff;
			formDiv.hide();
			//formDiv.style.display = "none";
			confirmationMainDiv.show();
			//confirmationMainDiv.style.display = "block";		
			
			if (typeof(Storage) !== "undefined") 
			{
				var address1 = new NewAddress(firstName.val(), lastName.val(), email.val(), phone.val());
				//next 3 lines change to store to database function
				programAddressData.push(address1);
				var localAddressData = JSON.stringify(programAddressData);
				localStorage.setItem("addressArray", localAddressData);
				
			} 
			else 
			{
				// Sorry! No Web Storage support..
			}
			
			
		}	 
	}) 
 
	
})






	