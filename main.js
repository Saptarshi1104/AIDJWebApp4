song = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
song = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet is initialized");
}

function draw(){
image(video, 0, 0, 600, 500);

fill('red');
stroke('red');
circle(leftWristX, leftWristY, 20);
InNumberleftWristY = Number(leftWristY);
remove_decimals = floor(InNumberleftWristY);
leftWrist_divided_by_1000 = remove_decimals/1000;
volume = remove_decimals/1000;
document.getElementById("volume").innerHTML = "Volume- " + volume;
song.setVolume(volume);
}

function play(){
song.play();
song.setVolume(volume);
song.rate(1);
}

function gotPoses(results){
if(results.length > 0){
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("Left Wrist X is " + leftWristX + " and Left Wrist Y is " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("Right Wrist X is " + rightWristX + " and Right Wrist Y is " + rightWristY);
}
}