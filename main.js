song = "BELIEVE.mp3";
scoreLeftWrist=0;
scoreRightWrist=0;
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}
function draw()
{
    image(video, 0, 0, 600, 500);
   
    fill("green");
    stroke("yellow");

if(scoreLeftWrist > 0.2)
{
    circle(leftWristX, leftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals / 500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
    }
    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        if(rightWrist >0 && rightWrist <= 100)
        {
            document.getElementById("speed").innerHTML ="speed = 0.5x";
            song.rate(0.5);
        }
       else if(rightWrist >0 && rightWrist <= 100)
        {
            document.getElementById("speed").innerHTML ="speed = 1x";
            song.rate(1);
        }
       else if(rightWrist >0 && rightWrist <= 100)
        {
            document.getElementById("speed").innerHTML ="speed = 1.5x";
            song.rate(1.5);
        }
       else if(rightWrist >0 && rightWrist <= 100)
        {
            document.getElementById("speed").innerHTML ="speed = 2x";
            song.rate(2);
        }
      else if(rightWrist >0 && rightWrist <= 100)
        {
            document.getElementById("speed").innerHTML ="speed = 2.5x";
            song.rate(2.5);
        }
    }
}

function preload()
{
    song = loadSound("BELIEVE.mp3");
}
function play()
    {
        song.play();
        song.setVolume(1);
        song.rate(1);
    }
function gotPoses(results)
{
if (results.length > 0)
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
rightWristX = results[0].pose.rightWristX;
rightWristY = results[0].pose.rightWristY;
console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);

leftWristX = results[0].pose.leftWristX;
leftWristY = results[0].pose.leftWristY;
console.log("leftWristX=" + leftWristX + "leftWristY=" + leftWristY);
}
function pause()
{
    song.pause();
}