//Build a Compact Invoice Using Rest + Default
const invoice = function(gstRate = 0.18, ...items) {

    let subtotal = 0;

    for (let i= 0;i< items.length;i++) {

        const item = items[i];
        if (item.name === "stop") {
            break;
        }
        if (!item.price || !item.qty || item.price <= 0 || item.qty <= 0) {
            continue;
        }
        subtotal += item.price * item.qty;
    }

    let gst = subtotal * gstRate;
    let total = subtotal + gst;

    return {
        subtotal: subtotal,
        gst: gst,
        total: total
    };
};
const result = invoice(
    0.18,
    { name: "Pen", price: 10, qty: 3 },
    { name: "Pencil", price: 5, qty: 2 },
    { name: "Eraser", price: -2, qty: 5 },   
    { name: "Stop" },                        
    { name: "Book", price: 50, qty: 1 }     
);

console.log(result);