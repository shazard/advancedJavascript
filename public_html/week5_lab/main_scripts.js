
// class for new project objects
function newProject(name, website, description)
{
	this.name = name;
	this.website = website;
	this.description = description;	
}

//variables for blank string to hold html, empty array to hold project objects to be put into table
var projectTableHTML = "";
var projectGrid = [];

//some dummy projects to fill out the array intitially
projectGrid[0] = new newProject("AngularJS", "https://angularjs.org/", "HTML enhanced for web apps!");
projectGrid[1] = new newProject("jQuery", "http://www.jquery.com", "Main jQuery website");
projectGrid[2] = new newProject("Amazon", "http://www.amazon.com", "Shop for javascript books!");


//function to create an html containing the projects in the projectGrid array within the projectTableHTML string
var generateProjectTable = function()
{
	projectTableHTML = "<table>";
	for (i = 0; i < projectGrid.length; i++)
	{
		projectTableHTML += "<tr><td>" + "<a href='" + projectGrid[i].website + "'>"+ projectGrid[i].name + "</a></td><td>" + projectGrid[i].description + "</td><td><input type='button' value='Edit' onclick='editProject(" + i + ")' /></td></tr>";
	}
	projectTableHTML += "</table>";
}

//function to add new item to table array based off of entered info, then regenerate html string and recreate table
function addToProjectTable()
{
	var addName = $("#projectName").val();
	var addWebsite = $("#website").val();
	var addDescription = $("#description").val();
	var addProject = new newProject(addName, addWebsite, addDescription);
	projectGrid.push(addProject);
	generateProjectTable();
	$("#project_listing").html(projectTableHTML);
	console.log(projectGrid);
}

function editProject(indexID)
{
	$("#editProjectName").val(projectGrid[indexID].name);
	$("#editWebsite").val(projectGrid[indexID].website);
	$("#editDescription").val(projectGrid[indexID].description);
	document.getElementById("edit_form").style.display = "block";	
}

function updateProject()
{
	
	//add function to edit the project
	
	
}

//when page loads, create project table and update innerHTML of listing div
window.onload = function()
{
	generateProjectTable();
	$("#project_listing").html(projectTableHTML);
	//console.log(projectTableHTML);	
}

