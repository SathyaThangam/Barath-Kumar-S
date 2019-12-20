var article=document.getElementById("article");
var videos=document.getElementById("videos");
var almanac=document.getElementById("almanac");
var snippets=document.getElementById("snippets");
var newsletter=document.getElementById("newsletter");
var jobs=document.getElementById("jobs");
var guides=document.getElementById("guides");
var division=document.getElementById("color");
division.addEventListener("mouseover",function(){
    article.style.stroke="#f18822";
    videos.style.stroke="#E65570";
    almanac.style.stroke="#ed5234";    
    snippets.style.stroke="#9649a8";   
    newsletter.style.stroke="#3eaaf4"; 
    jobs.style.stroke="#52af50"; 
    guides.style.stroke="#709A43";
});
division.addEventListener("mouseout",function(){
    article.style.stroke="#c2c2c2";
    videos.style.stroke="#c2c2c2";
    almanac.style.stroke="#c2c2c2";
    snippets.style.stroke="#c2c2c2";
    newsletter.style.stroke="#c2c2c2";
    jobs.style.stroke="#c2c2c2";
    guides.style.stroke="#c2c2c2";
});
