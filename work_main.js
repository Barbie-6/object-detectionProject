img = "";
status = "";
function back() {
    window.location = "index.html";
}
function preload() {
   img = loadImage("workspace.png"); 
}
function setup() {
   canvas = createCanvas(500, 410);
   canvas.center();

   object_detector = ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status_work").innerHTML = "Status: Detecting Objects";
}
function draw() {
image(img, 0, 0, 500, 410);
}function modelLoaded() {
   console.log("Model is loaded!!");
   status = true;
   object_detector.detect(img, gotResults);
}
function gotResults(results) {
   if(error) {
      console.error(error);
   }
   else{
      console.log(results);
   }
}