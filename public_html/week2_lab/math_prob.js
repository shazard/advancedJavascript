
const N = 20;
var newGrid = [];
var $ = function (id) {
    return document.getElementById(id);
}

var randomNumber = function (min, max)
{
	return Math.floor (Math.random() * (max - min + 1)) + min;
}

function randomOperand ()
{
	var operands = ["+", "-", "*", "/"];
	return (operands[randomNumber(0,3)]);
}
var calculate_click = function () {	
	
	var rightAns = 0;
	
	for(problem in newGrid)
	{
			if (newGrid[problem].answer == $("ans_" + problem).value)
			{
				rightAns++;
			}	
	}
	var grade = (rightAns / N) * 100
	$("result").innerHTML  = "You correctly answered " + rightAns + " questions out of " + N  + ". Grade: " + grade;
}

function GridCreator(rand1, rand2, randOp)
{	
	this.op1 = rand1;
	this.op2 = rand2;
	this.operand = randOp;	
	this.answer = eval(rand1 + randOp +rand2);
}




var generateGrid = function ()
{
	var val1, val2, operand;
	var my_html = "";
	
	for (var i=0; i<N; i++)
	{
		
		//val1 = randomNumber(1, 10);
		//val2 = randomNumber(1, 10);
		//operand = randomOperand ();
		newGrid[i] = new GridCreator(randomNumber(1, 10), randomNumber(1, 10), randomOperand());

		
		if (i%4 == 0) 
		my_html += "<div class='row'>";
		my_html += "<div class='left_operand'>";
		my_html += newGrid[i].op1;
		my_html += "</div>";
		
		my_html += "<div class='operator'>";
		my_html += newGrid[i].operand;
		my_html += "</div>";
		
		
		my_html += "<div class='right_operand'>";
		my_html += newGrid[i].op2;
		my_html += "</div>";
		my_html += "<div class='right_operand'>";
		my_html += "<input type='text' class='num' id='ans_" + i + "'>";
		my_html += "</div>";
		
		if (i%4 == 0) 
		my_html += "</div>";
		
	}
	console.log(newGrid);
	$("problems").innerHTML  = my_html;
}

window.onload = function () {
    generateGrid ();
	$("calculate").onclick = calculate_click;
}
