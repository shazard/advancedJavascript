addEventListener("load", init);

var canvas;
var context;
var ship;
var friction;
var x = 100;
var y = 100;

function init(e)
{
	
	canvas = document.querySelector("canvas");
	context = canvas.getContext("2d");
	
	ship = new Ship(100, 100, 1.5, 1, "red", 10, 10);
	friction = .97;
	ship.thrust = 1;

	
	var timer = setInterval(animate, 1000/30);
	
	
	
}

function animate()
{
	context.clearRect(0,0, canvas.width, canvas.height)
	
	
	
	
	
	
	if(d)
	{		
		ship.angle += 3;
	}
	if(a)
	{		
		
		ship.angle += -3;
	}
	if(w)
	{		
		ship.vx += Math.cos(ship.angle * Math.PI/180) * ship.thrust;
		ship.vy += Math.sin(ship.angle * Math.PI/180) * ship.thrust;
	}
	if(s)
	{		
		ship.vx -= Math.cos(ship.angle * Math.PI/180) * ship.thrust;
		ship.vy -= Math.sin(ship.angle * Math.PI/180) * ship.thrust;
	}
	
	/*
	if (x > canvas.width)
	{
		x = -50;
	}
	
	if (y > canvas.height)
	{
		y = -50;
	}

	if (x < -51)
	{
		x = canvas.width;
	}
	if (y < -51)
	{
		y = canvas.height;
	} */
	ship.vx *= friction;
	ship.vy *= friction;
	//ship.vy += 1;
	ship.move();
	ship.draw();
	
}