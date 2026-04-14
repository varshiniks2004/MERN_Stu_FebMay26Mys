const enrollEmitter=require("./courses");
let currentEnrollement=null;
function getEnrollement(){
    return currentEnrollement;
}
function clearEnrollement(){
    currentEnrollement=null;
}
function Enrollmentduplicate(course,limit,lists){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(currentEnrollement && 
                currentEnrollement.courseid===  course.id &&
            currentEnrollement.enrolllimit===limit.enrolllimit&&
        currentEnrollement.enrolllists===lists.enrolllists){
            return reject("duplicate enroll detected")
        }
        resolve("No duplicate enrollement found")
        },1000)
        
    });

    
}
function confirmEnroll(enroll,list){
    return new Promise((resolve) => {
        setTimeout(()=>{
            list.listsAvailable-=enroll.limit;
            currentEnrollement=enroll;
            enrollEmitter.emit("enrollConfirmed",enroll);
            resolve(enroll);
        },300);

        });
        
    }

    function enrolllogic(limit,course){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{

      if (course.enroll <= course.limit) {
        resolve("Enrollment limit  not reached");
         }
         reject("Enrollment limit reached");
            });
        });

    }
    function generateenroll(course,limit,lists){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const enroll = {
                    enrollId : `ENROLL-${Date.now()}`,
                    courseid:course.id,
                    courseTitle:course.title,
                    lesson:lists.lesson,
                    limit
                };
                resolve(enroll);
            },500);
        });
    }

    function processenroll(course,limit,lists){
        enrollEmitter.emit("enrollStarted");

        return Enrollmentduplicate(course,limit,lists)
            .then(()=>{
                enrollEmitter.emit("enrollValidater");
                return Enrollmentduplicate(lists,limit);
            })
            .then(()=>generateenroll(course,limit,lists))
            .then((enroll)=>confirmEnroll(course,limit))
            .then((confirmEnroll)=>saveenrollToFile(confirmEnroll))
            .catch((error)=>{
                bookingEmitter.emit("enrollFailed",error);
                throw error;
            });  
        }
        async function processenrollAsync(course,limit,lists){
    try{
        enrollEmitter.emit("enrollStarted");

        await Enrollmentduplicate(course,limit,lists);
        enrollEmitter.emit("enrollValidated");

        const enroll = await generateenroll(course,limit,lists);

        const confirmedenroll = await confirmEnroll(enroll,lists);

        await saveenrollToFile(confirmenroll);
        
        return confirmedenroll;
    }
    catch(error){
        enrollEmitter.emit("enrollFailed",error);
        throw error;
    }
}
async function saveenrollToFile(enroll){
    await appendenrollAsync(enroll);
    await appendLogAsync(`enroll saved: ${enroll.enrollId} for {enroll.enrollId}`);

    enrollEmitter.emit("enrollSaved.",enroll);
    return enroll;
}

module.exports = {processenroll,confirmEnroll,generateenroll,enrolllogic,Enrollmentduplicate,getEnrollement,clearEnrollement};