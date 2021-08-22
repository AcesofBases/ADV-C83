
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    

     var device_width=screen.width;

     canvas_width=device_width - 70

     canvas_height=screen.height- 300;

   
    color = "black";
    width_of_line = 2;
    if (device_width<992){
document.getElementById("myCanvas").width=canvas_width
document.getElementById("myCanvas").height=canvas_height
document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("touchstart function detected")
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
 
    }

    

  

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
function clearArea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
    
}















var mouseEvent= "empty";
var last_position_x,last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "red";
width_of_line=5;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
mouseEvent="mousedown event detected";

}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup event detected"
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave event detected"
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mousedown event detected")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;



    color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
    console.log("last position of x and y coordinates =");
    console.log("x = " + last_position_x + "y = " + last_position_y)
    ctx.moveTo(last_position_x,last_position_y);

    console.log("current position of x and y coordinates =");
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y)
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke()
}

last_position_x=current_position_of_mouse_x;
last_position_y=current_position_of_mouse_y;
}