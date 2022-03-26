function back() {
    window.location = "index.html";
}
function preload() {
   img = loadImage("workspace.png"); 
}
function setup() {
   canvas = createCanvas(500, 410);
   canvas.center();
}
function draw() {
image(img, 0, 0, 500, 410);
}