// queue with 5 tickets 
//support ticket queue processor
let tickets = [
    { id: "T101", priority: "high", resolved: false },
    { id: "T102", priority: "medium", resolved: true },
    { id: "T103", priority: "low", resolved: false },
    { id: "T104", priority: "high", resolved: true },
    { id: "T105", priority: "medium", resolved: false },
];

tickets.unshift({ id: "T106", priority: "high", resolved: false });
tickets.push(
    { id: "T107", priority: "low", resolved:false },
    { id: "T108", priority: "medium", resolved:true },
);
let currentTicket = tickets.shift();
let droppedTicket = tickets.pop();
let pending = tickets.filter(ticket => ticket.resolved === false);
let pendingIds = pending.map(ticket => ticket.id);
console.log("Current ticket:", currentTicket);
console.log("Dropped ticket:", droppedTicket);
console.log("Pending tickets:", pending);
console.log("Pending ticket IDs:", pendingIds);