// const {add, sub} = require("./math");

// console.log(add(3,70));
// console.log(sub(3,70));

const fs = require("fs");

console.log("before write operation", Date.now());
const startTime = Date.now();
fs.writeFile("./output.txt", "Hello Writing file", (err, data) => {
    if(err){
        console.log("err", err);
        return ;
    }
    console.log("writing completed", Date.now() - startTime, "ms");
});
// reading
fs.readFile("./output.txt", "utf-8", (err, data) => {
    console.log("read op", data);
})
// append
fs.appendFile("./output.txt", "\nSecond line", (err, data) => {
    // console.log("append op", data);
})
// make dir
fs.mkdir("test folder", {recursive: true}, (err, data) => {
    console.log("mkdir ", data);
});
// remove dir
fs.rmdir("test folder", () => {})
// delete file
fs.unlink("./output.txt", () => {})