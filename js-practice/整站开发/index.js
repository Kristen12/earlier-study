/**
 * Created by a88 on 2018/1/14.
 */
/*var oRollImg=document.getElementById('roll-img');
 var oContainerImg = document.getElementById('container-img');
 var oUl = oContainerImg.getElementsByTagName('ul')[0];
 var aLi = oUl.getElementsByTagName('li');
 var oRightBtn = document.getElementById('next');
 var oLeftBtn = document.getElementById('prev');
 oUl.innerHTML += oUl.innerHTML;
 oUl.style.width = (aLi[0].offsetWidth)*6+"px";
 speed=-1002;
 var timer;
 timer=setInterval(function () {
 oUl.style.left = oUl.offsetLeft+speed+"px";
 if(oUl.offsetLeft <= -oUl.offsetWidth/2){
 oUl.style.left = '0px';
 }
 if(oUl.offsetLeft > 0){
 oUl.style.left = -oUl.offsetWidth/2 +"px";
 }

 },1800);
 oRightBtn. onclick= function(){
 speed = -1002;
 };
 oLeftBtn. onclick = function(){
 speed = 1002;
 };*/
/*轮播图*/
var oContainerImg = document.getElementById('container-img');
var oUl = oContainerImg.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');
var oRightBtn = document.getElementById('next');
var oLeftBtn = document.getElementById('prev');
oUl.innerHTML += oUl.innerHTML;
oUl.style.width = (aLi[0].offsetWidth)*6+"px";
oRightBtn. onclick= function() {
    speed = -1002;
    oUl.style.left = oUl.offsetLeft + speed + "px";
    if (oUl.offsetLeft <=-oUl.offsetWidth/2) {
        oUl.style.left = 0;
    }
};
oLeftBtn. onclick = function(){
    speed = 1002;
    oUl.style.left = oUl.offsetLeft+speed+"px";
    if(oUl.offsetLeft > 0){
        oUl.style.left =(-oUl.offsetWidth/2)+1002 +"px" ;
    }
};



/*商标轮播图*/
var oCompanyBox = document.getElementById('company-box');
var oUl1 = oCompanyBox.getElementsByTagName('ul')[0];
var aLi1 = oUl1.getElementsByTagName('li');
var oNBtn = document.getElementById('next2');
var oPBtn = document.getElementById('prev2');
oUl1.innerHTML += oUl1.innerHTML;
oUl1.style.width = (aLi1[0].offsetWidth)*8+"px";
oNBtn. onclick= function() {
    speed = -250;
    oUl1.style.left = oUl1.offsetLeft + speed + "px";
    if (oUl1.offsetLeft <=-oUl1.offsetWidth/2) {
        oUl1.style.left = 0;
    }
};
oPBtn. onclick = function(){
    speed =250;
    oUl1.style.left = oUl1.offsetLeft+speed+"px";
    if(oUl1.offsetLeft > 0){
        oUl1.style.left =(-oUl1.offsetWidth/2)+250+"px" ;
    }
};




