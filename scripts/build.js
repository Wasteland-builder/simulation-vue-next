// 对package下所有的文件打包
const fs = require('fs')

const targets = fs.readdirSync('packages').filter(f => {
    if (!fs.statSync(`packages/${f}`).isDirectory()) {
        return false
    }
    return true
})

// 对我们的目标进行依次打包，并行打包
async function build(source) {
    
}

function runParallel(targets, iteratorFn) {
    const res = []
    for (const item of targets) {
        const p = iteratorFn(item)
        res.push(p)
    }
    return Promise.all(res)
}

runParallel(targets, build)
