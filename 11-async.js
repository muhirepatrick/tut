const fs = require('fs')
//const { start } = require('repl')
console.log('starting the system')
fs.readFile('./content/first.txt','utf-8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    fs.readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }  
        const second = result;
        fs.writeFile('./content/result-async.txt',`here is result for async: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done by doing it ...')
        })
    })
})
console.log('starting another one ')

