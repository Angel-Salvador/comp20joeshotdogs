
  function order() {
    var hotdogs = parseInt(prompt("How many hotdogs would you like?"));
    var fries = parseInt(prompt("How many fries would you like?"));
    var drinks = parseInt(prompt("How many drinks would you like?"));

    var subtotal = ((hotdogs * 4 ) + (fries * 3.50) + (drinks * 1.75));
    var discount = 0;
    if (subtotal >= 20) {
        discount = subtotal * 0.1;
    }
    var discountedtotal = subtotal - discount;
    var tax = discountedtotal * 0.0625;
    var grand = discountedtotal + tax;
    var discountText = (discount > 0) ? "Subtotal (10% discount): $" : "Subtotal: $";
    document.getElementById("discountedtotal").innerHTML = discountText + discountedtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "6.25% Mass. Tax: $" + tax.toFixed(2);
    document.getElementById("final").innerHTML = "Final Total After Tax: $" + grand.toFixed(2);
}
