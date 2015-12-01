function Ship(x, y, scale, thrust, color, width, height)
{
	
	this.scale = scale;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.vy = 0;
	this.thrust = thrust;
	this.color = color;
	this.angle = 0;
	
	
	this.draw = function()
	{
		var halfWidth = this.width/2 * this.scale;
		var halfHeight = this.height/2 * this.scale;
		context.save();
		context.translate(this.x, this.y);
		context.rotate(this.angle * Math.PI/180);
		context.fillStyle = this.color;
		context.beginPath();
		context.moveTo(halfWidth, 0);
		context.lineTo(-halfWidth, halfHeight);
		context.lineTo(-halfWidth/2, 0);
		context.lineTo(-halfWidth, -halfHeight);
		context.closePath();
		context.fill();
		context.restore();		
	}
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}	
}