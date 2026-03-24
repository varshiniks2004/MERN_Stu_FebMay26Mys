//how JS handles asynch task in node.JS
function fetchReport(callback){
    console.log ("fetching report data...");
    setTimeout(()=>{
        const report="monthly report is ready";
        callback(report);

    },1000);
}
fetchReport(function(reportMessage){
    console.log(reportMessage);
});
console.log("application continues to execute further");