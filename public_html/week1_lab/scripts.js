window.onload = function(){
//get number input from page text box
	var addButton = document.getElementById("createTable");
	addButton.onclick = function() 
	{//check if unput is a number, and in range
		var magicNumber = parseInt(document.getElementById("entryBox").value);

		if (isNaN(magicNumber) || magicNumber < 1 || magicNumber > 100) 
		{
			alert ("Your magic number must be between 1 and 100... and must be a number...");
		}
		else 
		{
			//if valid, grab the div for the table and the average output, generate a table sized based on input, and fill and style
			//as noted in page comments
			var result = document.getElementById("magicTable");	
			var averageResult = document.getElementById("magicAverage");				
			var str = "<table cellpadding='5' cellspacing='5'>";
			var totalOfDaStuffs = 0;
			for (i=0; i < magicNumber; i++) 
			{
				str += "<tr>";		
				for (j=0; j < magicNumber; j++) 
				{
					var magicRandom = randomNumber(1,100);
					var colorMe = "";
					if (magicRandom % 3 === 0)
					{
						colorMe = "style='background-color:red'";
					}
					else if (magicRandom % 2 === 0)
					{
						colorMe = "style='background-color:blue'";
					}
					str += "<td " + colorMe + ">" + magicRandom + "</td>";
					totalOfDaStuffs += magicRandom;
				}
				str += "</tr>";
			}	
			str += "</table>";
			var magicNumberSquared = magicNumber * magicNumber;
			var averageOfDaStuffs = Math.round((totalOfDaStuffs / magicNumberSquared));
			result.innerHTML = str;
			averageResult.innerHTML = "<h1>" + averageOfDaStuffs + "</h1>";
		}		
	}
	


	//function to get a random number
	var randomNumber = function (min, max)
	{
	return Math.floor (Math.random() * (max - min + 1)) + min;
	}

}