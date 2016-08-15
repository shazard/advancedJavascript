window.onload = function()
{
	
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	
	function Particle()
	{
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.width = Math.round(Math.random() * 10) + 10;
		this.height = this.width;
		this.drawMe = function()
		{	
			var randomColorNum = randomNumber(0,3);
			var colorMe = ["cyan", "purple", "orange", "red"];
			context.fillStyle = colorMe[randomColorNum];
			context.fillRect(this.x, this.y, this.width, this.height);
		}		
		
	}
	
	var dots = [];
	
	for (var i = 0; i < 20; i++)
	{
		dots [i] = new Particle();
		dots[i].drawMe();
		
	}
	
	function randomNumber(min, max)
	{
	return Math.floor (Math.random() * (max - min + 1)) + min;
	}
	
}