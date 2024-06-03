
//read create delete
let fs=require("fs");
//read
let buffer=fs.readFileSync("js1.js");
console.log("binary data"+buffer);

//create
// fs.openSync("abc.txt",'w');
//content replace if file is not exist then create
// fs.writeFileSync("abc.txt","how are you")
//update
//fs.appendFileSync("abc.txt"," moye moye")
//create directory
// fs.mkdirSync("meriidire");


// fs.writeFileSync("meriidire/merifile.txt","mera content")

let content=fs.readdirSync("meriidire")
console.log(content);
for(let i=0;i<content.length;i++){
    console.log("file",content[i],"isremoved");
    fs.unlinkSync('meriidire/'+content[i]);
}

fs.rmdirSync("meriidire");