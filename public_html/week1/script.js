
window.onload = function(){
	
/*	var taco = document.getElementById("taco");
	taco.innerHTML = "Fish Taco";
	var sandwich = document.getElementsByClassName("sandwich");
	console.log(sandwich);
	sandwich[1].innerHTML = "I got this one";
	
	var p = document.getElementsByTagName("p");
	console.log(p);
	p[4].style.color = "red";
	p[4].style.backgroundColor = "peachpuff";
	p[4].style.marginLeft = "25px";
	
	var h1 = document.querySelector(".sandwich");
	console.log(h1.innerHTML);    */
	
	/* one way to make a click function
	
	var submit = document.getElementById("submit");
	submit.onclick = function()
	{
		confirm("Are you sure?");
	}   */
	
	/* another way to make a click function 
	
	var submit = document.getElementById("submit");
	
	submit.onclick = myFunction;
	
	function myFunction()
	{
		confirm("Are you sure?");
	}   */
	
	var submit = document.getElementById("submit");
	
	submit.onclick = myFunction;
	function myFunction()
	{
		var firstName = document.getElementById("first-name");
		//OR use this and remove the .value in the variable below
		//but you don't have any of the other attributes of the text box this way
		//var firstName = document.getElementById("first-name").value;
		var lastName = document.getElementById("last-name");
		alert(firstName.value + " " + lastName.value);
	}
	
}

