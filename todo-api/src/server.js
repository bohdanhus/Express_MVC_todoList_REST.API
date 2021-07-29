const app = require('./app')

// const port = 3000
app.listen(3000, function () => { //call-back сработает сразу после запуска сервера
    console.log(`Server started at localhost: 3000`)
});
