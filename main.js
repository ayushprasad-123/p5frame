function preload(){}
function setup(){
    can=createCanvas(424,300);
    can.center();
    vid=createCapture(VIDEO);
    vid.size(424,300);
    vid.hide();
}
function draw(){
    image(vid,0,0,424,300);
    stroke(150,75,0);
    strokeWeight(50);
    noFill();
    rect(0,0,424,300);
}
function snap(){save('img.jpeg');}