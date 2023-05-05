noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(600, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("poseNet is initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        console.log("leftwristX = "+leftwristX+"rightwristX = "+rightwristX);
        difference = floor(leftwristX - rightwristX);
        console.log(difference);
    }
}
function draw() {
    background("#ff8000");
    document.getElementById("square_sides").innerHTML = "Width and height of the square is " + difference + "px";
    fill("purple");
    stroke("black");
    square(noseX, noseY, difference);
}