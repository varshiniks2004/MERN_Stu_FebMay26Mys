const auditReport = function(reportJSON) {
    const report = JSON.parse(reportJSON);

    let okCount = 0;
    let failCount = 0;

    
    for (let key in report.modules) {

        if (report.modules[key] === "ok") {
            okCount++;
        }

        if (report.modules[key] === "fail") {
            failCount++;
            break; 
        }
    }
    const summary = {
        app: report.app,
        status: report.status,
        okCount: okCount,
        failCount: failCount
    };

    return {
        summaryObject: summary,
        summaryJSON: JSON.stringify(summary)
    };
};
const reportJSON = `{
    "app": "Portal",
    "status": "ok",
    "modules": {
    "auth": "ok",
     "payment": "ok",
    "results": "fail",
    "profile": "ok"
    }
}`;

const result = auditReport(reportJSON);

console.log(result.summaryObject);
console.log(result.summaryJSON);