"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

function toCelsius() {
    $("degree_label_1").innerHTML = "Enter F degrees:";
    $("degree_label_2").innerHTML = "Degrees Celsius::";
    clearTextBoxes();
}

function toFahrenheit() {
    $("degree_label_1").innerHTML = "Enter C degrees:";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
    clearTextBoxes();
}

function convertTemp() {

var val = parseFloat($("degrees_entered").value);

if(isNaN(val)) {
    alert("You must enter a valid number for degrees.");
}
else {

    if($("to_celsius").checked) {
        $("degrees_computed").value = (val-32)/1.8;
}
else {
    $("degrees_computed").value = (val*1.8)+32;
}
}
}

window.onload = function() {
$("convert").onclick = convertTemp;
$("to_celsius").onclick = toCelsius;
$("to_fahrenheit").onclick = toFahrenheit;
$("degrees_entered").focus();
};