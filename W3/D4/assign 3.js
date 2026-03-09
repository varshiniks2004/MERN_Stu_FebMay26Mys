// Initial permission rules
let rules = [
    { role: "admin", action: "read", allowed: true },
    { role: "admin", action: "write", allowed: true },
    { role: "student", action: "read", allowed: true },
    { role: "student", action: "write", allowed: false },
    { role: "guest", action: "read", allowed: false }
];
let allowedRules = rules.filter(rule => rule.allowed === true);
let allowedPairs = allowedRules.map(rule => rule.role + ":" + rule.action);
let summary = allowedRules.reduce((acc, rule) => {
    acc[rule.role] = (acc[rule.role] || 0) + 1;
    return acc;
}, { admin: 0, student: 0, guest: 0 });
console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);