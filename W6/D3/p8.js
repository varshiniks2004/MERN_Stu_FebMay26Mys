// Allocating buffers

const emptyBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer:",emptyBuffer);
console.log("allocated buffer bytes:",[...emptyBuffer])
const textBuffer=Buffer.from([65,66,67]);
console.log("buffer from byte array",textBuffer);
//buffer.write() writes text into buffer
const buffer = Buffer.alloc(10);
const bytesWritten=buffer.write("hello world");
console.log("Bytes written:",bytesWritten);
//subarray
const firstSlice=buffer.subarray(3,6);
console.log("first slice as bytes:",[...firstSlice]);
//decode bytes into text: toString()
console.log("decode firstSlice of buffer:",buffer.subarray(1,4).toString("utf8"));


