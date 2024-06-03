let cp=require("child_process")
console.log("trying to open calculator");
// cp.execSync("calc");
console.log("opened calculator")
// cp.execSync("code");
console.log("vs code")
// cp.execSync("start chrome https:\\www.google.com")
let output=cp.execSync("node js1.js");
console.log(output);