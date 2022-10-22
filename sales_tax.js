"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    if ($("subTotal").value == "" || $("#taxRate").value =="") {
        $("#subTotal").focus();
    }
    else {
        let SubTotal = parseFloat($("#subTotal").value);
        let TaxRate = parseFloat($("taxRate").value);
    if (SubTotal < 0 || SubTotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
    } else if (TaxRate < 0 || TaxRate > 12) {
        alert("Tax Rate must be > 0 and < 12");
    }
        else {
            let salesTax = parseFloat(((SubTotal * TaxRate) / 100).toFixed(2));
            let totalRate = (SubTotal + salesTax).toFixed(2);
            $("#salesTax").value = salesTax;
            $("#total").value = totalRate;
        }
    }
};

//clear inputs
const clearEntries = () => {
    $("#subTotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";
    $("#subTotal").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        processEntries();
    });
    $("#clear").addEventListener("click", () => {
        clearEntries();
    });
});