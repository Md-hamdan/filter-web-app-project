var clown_nose;
function preload() {
clown_nose = loadImage("https://i.postimg.cc/bJmkd4gT/clownnose.png")
}
noseX=0
noseY=0
function setup() {
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
poseNet=ml5.poseNet(video,model_loaded)
poseNet.on('pose',gotResult())
}

function draw() {
image(video,0,0,300,300)

image(clown_nose,noseX-15,noseY-15,30,30)
}

function model_loaded() {
    console.log("model_loaded")
}

function gotResult(results) {
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
    }
}
