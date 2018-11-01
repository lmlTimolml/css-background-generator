var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");

function randomColors() {
    
}

function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value 
        + ", " 
        + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

body.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
    for(var i=0; i<1000; i++){
        color1.value = "#" + (Math.random().toString(16) + "000000").substring(2,8);
    };
    for(var i=0; i<1000; i++){
        color2.value = "#" + (Math.random().toString(16) + "000000").substring(2,8);
    };
    setGradient();
    
})