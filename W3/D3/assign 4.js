const getRoute = function(role, isLoggedIn) {
    if (!isLoggedIn) {
        return "login";
    }

    if (role=="admin") {
        return "admin";
    } 
    else if (role=="student") {
        return "student";
    } 
    else if (role=="college") {
        return "college";
    } 
    else if (role=="proctor") {
        return "proctor";
    } 
    else {
        return "denied";
    }
};
console.log(getRoute("admin", true));    
console.log(getRoute("student", true));   
console.log(getRoute("college", true));  
console.log(getRoute("proctor", true));   
console.log(getRoute("guest", true));     
console.log(getRoute("admin", false));   