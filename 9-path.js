const path = require('path');
const content = 'contentfolder';
console.log(path.sep)
 

const definedPath = path.join(content,'subfold','newfolder','testfolder')
module.exports =definedPath;
//console.log(filePath)
const base  = path.basename(definedPath)
//console.log(base)
const dirname = path.resolve(__dirname,'content','subfolder');
console.log(dirname)
//const absolute = path.resolve(__dirname,'content','subfolder','test.t')
 //console.log(absolute)
/*const os = require('os');
 // info about current user 

 const user = os.userInfo()
 console.log(user)

 // methods returns the system up time in seconds

 console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs ={
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOs)
*/