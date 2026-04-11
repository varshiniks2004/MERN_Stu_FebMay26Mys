// CRUD operations in MongoDB using Mongoose

const mongoose = require("mongoose");
async function runCrudDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/abcmern")
        console.log("MongoDB connected successfully")

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        });
        const Student = mongoose.models.Student || mongoose.model("Student",studentSchema);
        // Clearing previous demo data
        await Student.deleteMany({role:"demo-student"});

        // Create using save()
        const firstStudent = new Student({
            name: "varsh",
            age: 21,
            role: "demo-student"
        });

        await firstStudent.save();
        // console.log("Created new Studentn with save()",firstStudent);

          // Create using create()
        const secondStudent = await Student.create({
            name: "varshini",
            age: 20,
            role: "demo-student"
        });
        // console.log("Created new Studentn with create()",secondStudent);

        // Read using find()
        const allDemoStudents = await Student.find({role:"demo-student"});
        // console.log("Read with find() ",allDemoStudents);

        // Read using finOne()
        const oneDemoStudents = await Student.findOne({name : "varsh"});
        console.log("Read with findOne() : ",oneDemoStudents);

        // Update using findByIdAndUpdate
        const updatedStudent = await Student.findByIdAndUpdate(
             
            {"_id": ObjectId('69d87eca10fbd7d1732cb942')},
            {age : 19},
            {new : true}
        );
        console.log("Updated with findByIdAndupadte()",updatedStudent);

        // Delete using findByIdAndDelete()
        const deletedStudent = await Student.findByIdAndDelete(firstStudent._id);
        console.log("Deleted with findByIdAndDelete()",deletedStudent);

        await mongoose.connection.close()
                console.log("connection closed")
    }catch(error){
        console.log("CRUD demo error :",error.message);
    }
}
runCrudDemo();