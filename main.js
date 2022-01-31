function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(video);
	video.size (800,400);
	video.parent('game_cansole');

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log(modelLoaded);

}
function gotPoses(results){
    if(results.length>0)
	{
		console.log(results);
		noseX=results[0].pose.nose.x;
		nosey=results[0].pose.nose.y;

	}
}

function draw() {
	game()
}






