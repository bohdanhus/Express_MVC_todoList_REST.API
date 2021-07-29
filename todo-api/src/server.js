const express = require(`express`);
const app = express()

app.use(express.json)


function logRequest({ method, url }) {
    console.log(`[${new Date().toISOString()}] ${method} ${url}`)
}
const tasks = [{ name: 'Game tasks' }, { name: 'Create task' }]

app.get('/tasks', (req, res) => res.json(tasks))
app.post('/tasks', (req, res) => {
    tasks.push(task)
    res.json(task)
})
app.use((req, res) => {
    logRequest(req)
    if (req.url === '/tasks') {
        if (req.method == 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(tasks));
        } else if (req.mehthod === 'POST') {
            const data = []
            req.on('data', chunk => data.push(chank))
            req.on('end', () => {
                const task = JSON.parce(data.join(''))
                tasks.push(task)
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(tasks));
            })
            res.end(JSON.stringify(tasks));
        } else {
            res.writeHead(200, { 404: 'Not found' });
            res.end()
        }
    } else {
        res.writeHead(200, { 404: 'Not found' });
        res.end()
    }
})

const port = 3000
app.listen(port, () => { //call-back сработает сразу после запуска сервера
    console.log(`Server started at localhost:${port}`)
});