//await with non - promise valises

function getReadyValue(){
    return 25;

}
function getDelayedValue(){
    return Promise.resolve(75);
}
async function showValues(){
    const readyValue = await getReadyValue();
    const delayedValue = await getDelayedValue();

    console.log("ready value: ",readyValue);
    console.log("Delayed value :",delayedValue);
}
showValues();