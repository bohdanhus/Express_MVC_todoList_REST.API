const express = require(`express`);
const app = express()

function logRequest ({ method, url }, res, next) {
    console.log(`[${new Date().toISOString()}] ${method} ${url}`)
    next()
}
 
app.use(express.json())
app.use(logRequest)

const inc = (init = 0) => () => ++init
const genId = inc()
const tasks = [
    { id: genId(), name: 'Game tasks' done: false}, 
    { id: genId(), name: 'Create task' done: false}
]
const createTask = data => {
    return {
        id: genId(),
        name: data.name,
        done: false
    }
}
app.get('/tasks', (req, res) => res.json(tasks))

app.post('/tasks', (req, res) => {
    const task = createTask(req.body)
    tasks.push(task)
    res.json(task)
})

app.patch('/tasks/:id', (req, res) =>{
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskId)
    if (task) {
        Object.assign(task, req.body)
        res.json(tasks)
    } else {
        res.status(404).json({ error: 'Task not found' })
    }
})

const port = 3000
app.listen(port, () => { //call-back сработает сразу после запуска сервера
    console.log(`Server started at localhost:${port}`)
});


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
