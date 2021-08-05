const express = require(`express`);
const app = express()


//app.use(express.json())
//app.use(logRequest) logRequest to <<<route>>

const inc = (init = 0) => () => ++init

const genId = inc()

const tasks = [
    { id: genId(), name: 'Game tasks' }, 
    { id: genId(), name: 'Create task' }
]

const createTask = data => {// to route
    return {
        id: genId(),
        name: data.name,
        done: false
    }
}






// if (req.url === '/tasks') {
//     if (req.method == 'GET') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(tasks));
//     } else if (req.mehthod === 'POST') {
//         const data = []
//         req.on('data', chunk => data.push(chank))
//         req.on('end', () => {
//             const task = JSON.parce(data.join(''))
//             tasks.push(task)
//             res.writeHead(201, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify(tasks));
//         })
//         res.end(JSON.stringify(tasks));
//     } else {
//         res.writeHead(200, { 404: 'Not found' });
//         res.end()
//     }
// } else {
//     res.writeHead(200, { 404: 'Not found' });
//     res.end()
// }
// })

// ==
// == 