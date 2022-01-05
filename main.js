function preload(){

} 
function setup(){
    canvas = createCanvas(640, 480);  
    canvas.position(110, 250); 
    video = createCapture(VIDEO); 
    video.hide(); 

    tint_color = "" 
} 
function draw() {
    image(video, 0,0, 640, 480); 
    tint(tint_color);   
    fill("#DA00FF") 
    stroke("#DA00FF")
    circle(0, 0, 70); 
    circle(640, 0, 70);   
    circle(640, 480, 70); 
    circle(0, 480, 70); 

} 

function take_snapshot(){
    save('student_name.png'); 
} 

function fillter_tint()
{
    tint_color = document.getElementById("color_name").value;
}