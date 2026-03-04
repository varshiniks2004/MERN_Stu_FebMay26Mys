//nested objects
const student={
    firstName:"varsh",
    lastname:"ks",
    score:{
        math:80,
        science:83,

    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstName +""+this.lastname;
    },
    greet(){
        console.log("Hi,",this.fullname());
    }
};
    console.log(student.fullname());
    



