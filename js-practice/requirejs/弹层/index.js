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
require(["jquery","dialog"],function ($,dialog) {
    $("#btn").on("click",function () {
            dialog.open({
                width:800,
                title:"dsa",
                content:"content.html"
            });
        });

    $("body").on("click","#cancel",function () {
        dialog.close();
    });
    $("body").on("click","#yes",function () {
        dialog.open({
            width:200,
            title:"please inpue your name",
            content:"content.html"
        });
    })
});