//How cookie is used to track session ID
const sessionStore={
    "abc123":{
        userId:101,
        userName:"varsh",
        role:"student"
    }
};
//simulated browser cookie value
const browserCookieSessionId="abc123";
const sessionData=sessionStore[browserCookieSessionId];
console.log("server-side session data",sessionData);