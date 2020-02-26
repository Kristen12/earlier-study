/**
 * Created by a88 on 2017/12/3.
 */
//轮播图
var prevIdx=0;
var timer;
$("#jnBtn a").on("mouseover",function () {
    $this=$(this);
    $(this).addClass("chos").siblings().removeClass("chos");
    if($this.index()>prevIdx){
        $("#JS_imgWrap img").eq($this.index()).show().siblings().hide();
    }else{
        $("#JS_imgWrap img").eq($this.index()).stop().fadeIn().siblings().stop().fadeOut();
    }
    prevIdx=$this.index();
});
run();
function run() {
    timer=setInterval(function () {
        prevIdx++;
        if(prevIdx==$("#JS_imgWrap img").length){
            prevIdx=0;
        }
        $("#jnBtn a").eq(prevIdx).triggerHandler("mouseover");
    },1000);
}
$("#jnImageroll").on("mouseover",function () {
    clearInterval(timer);
}).on("mouseout",function () {
    run();
});


//右侧标题栏
$(".tooltip").on("mouseover",function(e){
    this.currTitle=this.title;//原生取属性方法 jQuery是attr  属性为全局
    $('<div id="tip">'+this.currTitle+'</div>').appendTo("body").offset({
        left:e.pageX+20,//加数是为了不让定位的div与鼠标重合
        top:e.pageY+20
    });
    $(this).attr("title","");
}).on("mousemove",function (e) {
    $("#tip").offset({
        left:e.pageX+20,
        top:e.pageY+20
    });
}).on("mouseout",function () {
    $("#tip").remove();
    $(this).attr("title",this.currTitle);
});