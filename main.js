Status="";

function preload()
{
}

function setup()
{
    canvas=createCanvas(300, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 300, 350);
}



function start()
{
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    inputValue=document.getElementById("textInput").value;
}

function modelLoaded()
{
    console.log("model loaded");
    Status=true;
}