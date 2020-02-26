import css from "./css/index.css";
import sass from "./css/common.scss";
import $ from "jquery";
document.write("bbbb");
$("#a").html("lalala");
let waerzi = x => {
    return x+5;
} ;
let json=require("../author.json");
document.querySelector("#json").innerHTML=`editor:${json.name}`;