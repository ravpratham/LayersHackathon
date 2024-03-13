window.onload=function start(){
    document.getElementById("full").style.display="block"
    document.getElementById("load").style.display="none";
    
}
function home(){
    document.getElementById("home").style.color="#BF9C5A";
    document.getElementById("watch").style.color="#EEEEEE";
    document.getElementById("user").style.color="#EEEEEE";
    document.getElementById("main").style.display="block";
    document.getElementById("full-search").style.display="none";
    document.getElementById("full-user").style.display="none";
}
function watch(){
    document.getElementById("home").style.color="#EEEEEE";
    document.getElementById("watch").style.color="#BF9C5A";
    document.getElementById("user").style.color="#EEEEEE";
    document.getElementById("main").style.display="none";
    document.getElementById("full-search").style.display="block";
    document.getElementById("full-user").style.display="none";
}
function user(){
    document.getElementById("home").style.color="#EEEEEE";
    document.getElementById("watch").style.color="#EEEEEE";
    document.getElementById("user").style.color="#BF9C5A";
    document.getElementById("main").style.display="none";
    document.getElementById("full-search").style.display="none";
    document.getElementById("full-user").style.display="block";
}
function cl(){
    document.getElementById("nav").style.animation="0.8s slide2";
    document.getElementById("nav").style.left="calc(-50vw - 101px)"
}
function hm(){
    document.getElementById("hm").style.color="#BF9C5A";
    document.getElementById("wl").style.color="#EEEEEE";
    document.getElementById("ur").style.color="#EEEEEE";
    document.getElementById("fa").style.color="#EEEEEE";
    document.getElementById("ab").style.color="#EEEEEE";
}
function wl(){
    document.getElementById("hm").style.color="#EEEEEE";
    document.getElementById("wl").style.color="#BF9C5A";
    document.getElementById("ur").style.color="#EEEEEE";
    document.getElementById("fa").style.color="#EEEEEE";
    document.getElementById("ab").style.color="#EEEEEE";
}
function ur(){
    document.getElementById("hm").style.color="#EEEEEE";
    document.getElementById("wl").style.color="#EEEEEE";
    document.getElementById("ur").style.color="#BF9C5A";
    document.getElementById("fa").style.color="#EEEEEE";
    document.getElementById("ab").style.color="#EEEEEE";
}
function fa(){
    document.getElementById("hm").style.color="#EEEEEE";
    document.getElementById("wl").style.color="#EEEEEE";
    document.getElementById("ur").style.color="#EEEEEE";
    document.getElementById("fa").style.color="#BF9C5A";
    document.getElementById("ab").style.color="#EEEEEE";
}
function ab(){
    document.getElementById("hm").style.color="#EEEEEE";
    document.getElementById("wl").style.color="#EEEEEE";
    document.getElementById("ur").style.color="#EEEEEE";
    document.getElementById("fa").style.color="#EEEEEE";
    document.getElementById("ab").style.color="#BF9C5A";
}
function opn(){
    
document.getElementById("nav").style.animation="0.8s slide";
    document.getElementById("nav").style.left="0vw"
}




