var startBtn =document.getElementById("btn");
var box=document.getElementById('box');
var flagBox=document.getElementById('flagBox');
var alertBox=document.getElementById('alertBox');
var alertImg=document.getElementById('alertImg');
var closeBtn=document.getElementById('close');
var score=document.getElementById('score');
var timer=document.getElementById('timer');
var n_sec = 0; //秒
var n_min = 0; //分
var n_hour = 0; //时
var minesNum;
var mineOver;
var block;
var mineMap=[];
var startBool=true;


function timers() {
    var str_sec = n_sec = 0;
    var str_min = n_min = 0;
    var str_hour = n_hour = 0;
    timer.innerHTML = '00:00:00';
    n_timer=setInterval(function () {

        if ( n_sec < 10) {
            str_sec = "0" + n_sec;
        }
        if ( n_min < 10 ) {
            str_min = "0" + n_min;
        }
        if ( n_hour < 10 ) {
            str_hour = "0" + n_hour;
        }
        n_sec++;
        if (n_sec > 59){
            n_sec = 0;
            n_min++;
        }
        if (n_min > 59) {
            n_sec = 0;
            n_hour++;
        }
        var time2 = str_hour + ":" + str_min + ":" + str_sec;
        timer.innerHTML = time2;
    }, 1000);
}


bindEvent();
function bindEvent() {
    startBtn.onclick=function () {

        if(startBool){
            timers();
            box.style.display='block';
            flagBox.style.display='block';
            init();
            startBool=false;
        }

    };
    box.oncontextmenu=function () {
        return false;
    };
    box.onmousedown=function (e) {
        var event=e.target;
        if(e.which==1){
            leftclick(event);
        }else if(e.which==3){
            rightclick(event);
        }
    }
    closeBtn.onclick=function () {
        alertBox.style.display='none';
        flagBox.style.display='none';
        box.style.display='none';
        box.innerHTML='';
        startBool=true;
    }
}


function init() {
    minesNum=40;
    mineOver=40;
    score.innerHTML=mineOver;

    for(var i=0;i<16;i++){
        for(var j=0;j<16;j++){
            var con=document.createElement('div');
            con.classList.add('block');
            con.setAttribute('id',i+'-'+j);
            box.appendChild(con);
            mineMap.push({
                mine:0
            });
        }
    }
    block=document.getElementsByClassName('block');
    while(minesNum){
        var mineIndex=Math.floor(Math.random()*256);
        if(mineMap[mineIndex].mine===0){
            mineMap[mineIndex].mine=1;
            block[mineIndex].classList.add('islei');
            minesNum--;
        }

    }


}





function leftclick(dom) {

    if(dom.classList.contains('flag')){
        return;
    }
    var islei=document.getElementsByClassName('islei');
    if(dom && dom.classList.contains('islei')){
        console.log('game over');
        clearInterval(this.n_timer);
        for(var i=0;i<islei.length;i++){
            islei[i].classList.add('show');
        }
        setTimeout(function () {
            alertBox.style.display='block';
            alertImg.style.backgroundImage='url("Minesweeper/../img/lose.jpeg")';
            box.style.display='none';
            flagBox.style.display='none';
        },600)
    }else {
        var n=0;
        var posArr=dom && dom.getAttribute('id').split('-');
        var posX=posArr && +posArr[0];
        var posY=posArr && +posArr[1];
        dom && dom.classList.add('num');
        for(var i=posX-1;i<=posX+1;i++){
            for(var j=posY-1;j<=posY+1;j++){
                var aroundBox =document.getElementById(i+'-'+j);
                if(aroundBox && aroundBox.classList.contains('islei')){
                    n++;
                }
            }
        }
        if(n!=0){
            dom && (dom.innerHTML=n);
        }

        if(n==0){
            for(var i=posX-1;i<=posX+1;i++) {
                for (var j = posY-1; j <=posY + 1; j++) {
                    var nearBox =document.getElementById(i+'-'+j);
                    if(nearBox && nearBox.length!=0){
                        if(!nearBox.classList.contains('check')){
                            nearBox.classList.add('check');
                            leftclick(nearBox);
                        }
                    }
                }
            }
        }
    }
}






function rightclick(dom) {
    if(dom.classList.contains('num')){
        return;
    }
    dom.classList.toggle('flag');
    if(dom.classList.contains('islei')&& dom.classList.contains('flag')){
        mineOver--;
    }
    if(dom.classList.contains('islei')&& !dom.classList.contains('flag')){
        mineOver++;
    }
    score.innerHTML=mineOver;
    if(mineOver==0){
        alertBox.style.display='block';
        alertImg.style.backgroundImage='url("Minesweeper/../img/success.jpeg")';
    }
}





