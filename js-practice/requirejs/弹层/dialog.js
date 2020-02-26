/**
 * Created by a88 on 2017/12/10.
 */
requirejs.config({

    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery-1.12.4'
    }
});
define(["jquery"],function ($) {
    return{
        open:function (arg) {
            var _this=this;
            this.defaultValue={
                width:300,
                height:200
            };
            /*var html='<div class="mask">'
                            +'<div class="container">'
                                    +'<div class="title">'
                                        +'<h2>aaa</h2>'
                                        +'<span class="close">X</span>'
                                    +'</div>'
                                    +'<div class="content">你会</div>'
                            +'</div>'
                    +'</div>';
            $("body").append(html);*/
            var value=$.extend(this.defaultValue,arg);
            this.$mask=$('<div class="mask"></div>');
            this.$container=$('<div class="container"></div>');
            this.$title=$('<div class="title"></div>');
            this.$H2=$('<h2></h2>').html(value.title);
            this.$close=$('<span class="close">X</span>')
                .on("click",function () {
                    _this.close();
                });
            this.$content=$('<div class="content"></div>');
            this.$container.appendTo(this.$mask).append(this.$title).append(this.$content).css({
                width:value.width,
                height:value.height,
                marginLeft:-value.width/2,
                marginTop:-value.height/2
            });
            this.$title.append(this.$H2).append(this.$close);
            this.$content.load(value.content);
            $("body").append(this.$mask);
        },
        close:function () {
            this.$mask.remove();
        }
    }
});