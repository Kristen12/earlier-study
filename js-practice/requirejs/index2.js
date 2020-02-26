/**
 * Created by a88 on 2017/12/10.
 */
require(["sortArray"],function (sortArray) {
    var arr=[1,3,22,5,90];
    var obj={
        name:"zhangsan"
    };
    console.log(sortArray(arr));
    console.log(sortArray(obj));
});
//function中传参的名不一定是sortArray可以是其他的
