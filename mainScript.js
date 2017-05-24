imageObjects = document.querySelectorAll("img");
linkObjects = document.querySelectorAll(".links a");

console.log(linkObjects);

for (var i = 0; i < imageObjects.length; i++) {

  imageObjects[i].addEventListener("mouseover", function(event) {
    event.target.style.opacity = 0.6;
  })

  imageObjects[i].addEventListener("mouseout", function() {
    event.target.style.opacity = 1.0;
  })

}


for (var i = 0; i < linkObjects.length; i++) {

  linkObjects[i].addEventListener("mouseover", function(event) {
    event.target.style.color = "#111111";
    console.log("link hovered over");
  })

  linkObjects[i].addEventListener("mouseout", function() {
    event.target.style.color = "#424242";
  })

}
