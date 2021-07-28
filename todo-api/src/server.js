const url = require('url')
const http = require(`http`);

function Plural(num, nom, gen, plu) {
    if (num % 10 == 0) {
        return `${num} ${plu}`;
    } else if (num == 1) {
        return `${num} ${nom}`;
    } else if (num % 10 > 10 && num % 10 < 20 || num % 10 == 1) {
        return `${num} ${plu}`;
    } else if (num % 10 >= 2 && num % 10 <= 4) {
        return `${num}  ${gen}`;
    } else if (num % 10 >= 5 && num % 10 <= 10) {
        return `${num} ${plu}`;
    }
    return;
};
console.log(Plural(22, 'плюс', 'плюса', 'плюсов'))


// const myObject = url.parse("localhost:3000/plural?number=2&forms=person,people,people", true).query; // { number : '2', forms: 'preson,people,people}

const server = http.createServer((req, res) => {

    if (req.url === '/headers') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end((JSON.stringify(req.headers) + '\n'));

    } else if (req.url === '/plural') {

        let myObject = url.parse(req.url, true).query;

        let array = Object.values(myObject);
        let newArray = array.split(',')

        const number = +newArray[0];
        const nom = newArray[1];
        const gen = newArray[2];
        const plu = newArray[3];

        const pl = Plural(number, nom, gen, plu)
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(pl)
    }

    res.writeHead(200, { 404: 'Not found' });
    res.end();

})
const port = 3000
server.listen(port, () => { //call-back сработает сразу после запуска сервера
    console.log(`Server started at localhost:${port}`)
});
