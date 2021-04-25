canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car4_width = 120;
car4_height = 70;
car4_image = "car_4.jpg";
car4_x = 10;
car4_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car_2.jpg";
car2_x = 10;
car2_y = 100;

background_image = "car_5.jpg";

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car4_imgTag = new Image(); //defining a variable with a new image
	car4_imgTag.onload = uploadcar4; // setting a function, onloading this variable
	car4_imgTag.src = car4_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar4() {
	ctx.drawImage(car4_imgTag, car4_x, car4_y, car4_width, car4_height);
}
function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car4_up();
			console.log("up arrow key");
		}
		if(keyPressed == '40')
		{
			car4_down();
			console.log("down arrow key");
		}
		if(keyPressed == '37')
		{
			car4_left();
			console.log("left arrow key");
		}
		if(keyPressed == '39')
		{
			car4_right();
			console.log("right arrow key");
		}
		if(keyPressed == '87')
		{
			car2_up();
			console.log("key w");
		}
		if(keyPressed == '83')
		{
			car2_down();
			console.log("key s");
		}
		if(keyPressed == '65')
		{
			car2_left();
			console.log("key a");
		}
		if(keyPressed == '68')
		{
			car2_right();
			console.log("key d");
		}
}

function car4_up()
{
	if(car4_y >= 0)
	{
		car4_y = car4_y - 10;
		console.log("When arrow is pressed, x = " + car4_y + " | y =" +car4_y)
		uploadBackground();
		uploadcar4();
		uploadcar2();
	}
}

function car4_down()
{
	if(car4_y <= 500)
	{
		car4_y = car4_y + 10;
		console.log("When arrow is pressed, x = " + car4_y + " | y =" +car4_x)
		uploadBackground();
		uploadcar4();
		uploadcar2();
	}
}

function car4_left()
{
	if(car4_x >= 0)
	{
		car4_x = car4_x - 10;
		console.log("When arrow is pressed, x = " + car4_x + " | y =" +car4_y)
		uploadBackground();
		uploadcar4();
		uploadcar2();
	}
}

function car4_right()
{
	if(car4_x >= 500)
	{
		car4_x = car4_x + 10;
		console.log("When arrow is pressed, x = " + car4_x + " | y =" +car4_y)
		uploadBackground();
		uploadcar4();
		uploadcar2();
	}
}