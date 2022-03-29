img = "";
status = "";
objects = [];
function back() {
    window.location = "index.html";
}
function preload() {
   img = loadImage("washroom.png"); 
}
function setup() {
   canvas = createCanvas(500, 370);
   canvas.center();

   object_detector = ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status_wash").innerHTML = "Status: Detecting Objects";
}
function draw() {
image(img, 0, 0, 500, 370);
if(status != ""){
   document.getElementById("status_wash").innerHTML = "Status: Objects Detected";
   for(i=0; i<objects.length; i++) {
      label = objects[i].label;
      percentage = floor(objects[i].confidence * 100);
      stroke("red");
      noFill();
      strokeWeight(2.5);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      stroke("green");
      strokeWeight(1);
      text(label + " " + percentage + "%", objects[i].x + 15, objects[i].y + 15);
   }
   document.getElementById("number_of_objects").innerHTML = "There are 15 objects in which " + objects.length + " has been detected";
}
}
function modelLoaded() {
   console.log("Model is loaded!!");
   status = true;
   object_detector.detect(img, gotResults);
}
function gotResults(error, results) {
   if(error) {
      console.error(error);
   }
   else{
      console.log(results);
      objects = results;
   }
}