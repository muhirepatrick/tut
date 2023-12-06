const fs = require('fs')

const first = fs.readFileSync('./content/first.txt','utf-8')
const second = fs.readFileSync('./content/first.txt','utf-8')

fs.writeFileSync('./content/result-sync.txt',`here is the result of: ${first},${second}`,{flag:'a'})