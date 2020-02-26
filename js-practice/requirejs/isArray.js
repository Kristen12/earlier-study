/**
 * Created by a88 on 2017/12/10.
 */
define(function () {
    function isArray(arr) {
        return (arr instanceof Array && arr.constructor==Array);
    }
    return isArray;
})
//typeof数组和对象都返回obkect
//instanceof 返回构造函数的一个实例(true false)       .constructor返回一个构造函数
//eg:   arr instance of object                     .constructor==Person