document.getElementById("soccer").onclick = showSoccer;
document.getElementById("swim").onclick = showSwim;
document.getElementById("dance").onclick = showDance;
document.getElementById("aqui").onclick = showMe;

let soccerCount = 0;
let swimCount = 0;
let danceCount = 0;
let countMe = 0;


function showSoccer() {
    if (soccerCount % 2 == 0 ){
        document.getElementById("foto").innerHTML = "// write Something about soccer";
    }
    else{
        document.getElementById("foto").innerHTML = "";
        showImage();
    }
    soccerCount++;
    swimCount = 0;
    danceCount = 0;
    countme = 0;
}
function showSwim() {
    if (swimCount % 2 == 0 ){
        document.getElementById("foto").innerHTML = "//write something about swimming";
    }
    else{
        document.getElementById("foto").innerHTML = "";
        showImage();
    }
    soccerCount = 0;
    danceCount = 0;
    countMe = 0;
    swimCount++;
}
function showDance() {
    if (danceCount % 2 == 0 ){
        document.getElementById("foto").innerHTML = "//write something about dance";
    }
    else{
        document.getElementById("foto").innerHTML = "";
        showImage();
    }
    soccerCount = 0;
    countMe = 0;
    swimCount = 0;
    danceCount++;
    
}

function showMe() {
    if (countMe % 2 == 0 ){
        document.getElementById("foto").innerHTML = "//write about me";
    }
    else{
        document.getElementById("foto").innerHTML = "";
        showImage();
    }

    soccerCount = 0;
    swimCount = 0;
    danceCount = 0;
    countMe++;
}

function showImage() {
    let img = document.createElement("img");
    img.src = "me.jpg";
    document.getElementById("foto").append(img);
}