document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").innerHTML = localStorage.getItem("name");

    document.querySelector("#text").style.background = localStorage.getItem("color");


});
