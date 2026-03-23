//using a custom commonJS module
const {calculateTax,applyDiscount,formatCurrency}= require("./p2");
const itemName="Laptop";
const basePrice=60000;
const discountedPrice=applyDiscount(basePrice,10);
const taxAmount=calculateTax(discountedPrice);
const finalPrice=discountedPrice + taxAmount;
console.log("item",itemName);
console.log("base price:",formatCurrency(basePrice));
console.log("Discounted price:",formatCurrency(discountedPrice));
console.log("GST tax @18%:",formatCurrency(taxAmount));
console.log("final price:",formatCurrency(finalPrice));