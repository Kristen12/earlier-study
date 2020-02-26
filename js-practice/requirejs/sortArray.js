/**
 * Created by a88 on 2017/12/10.
 */
define(["isArray"],function (isArray) {
    function sortArray(arr) {
        if(isArray(arr)){
            return arr.sort(function (a,b) {
                return a-b;//数组排序sort

        })
    }else {
            return "please enter the Array";
        }
    }
    return sortArray;
});