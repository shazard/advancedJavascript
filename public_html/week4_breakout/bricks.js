
addEventListener("load", init);

var canvas;
var context;
var brick;
var bricks = []


function init(e)
{
	
	canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");
	
	
	
	drawShit();
}


function Brick()
{
	this.scale = 1;
	this.height = 20;
	this.width = 60;
	this.color = 0;
	this.x = 0;
	this.y = 0;
	
	this.draw = function()
	{
		var colorPallette = ["red", "green", "yellow", "blue", "purple", "orange"];
		context.fillStyle = colorPallette[this.color];
		context.fillRect (this.x, this.y, this.width, this.height);
		
	}	
}

function drawShit()
{
	
	var colorIndex = 0;
	var x = 0;
	var y = 120;
	for (i=0; i < 84; i++)
	{
		if (i%14 == 0 && i > 0)
		{
			x = 0;
			y += 22;
			colorIndex +=1;
		}
			addbrick = new Brick();
			addbrick.x = x;
			addbrick.y = y;
			addbrick.color = colorIndex;
			bricks.push(addbrick);
			x += 62;
	}
	for (j = 0; j < bricks.length; j++)
	{
		bricks[j].draw();
		
		
	}
	console.log(bricks);
	
}

function randomNumber(min, max)
{
	return Math.floor(Math.random()* (max - min + 1) ) + min;
	
}