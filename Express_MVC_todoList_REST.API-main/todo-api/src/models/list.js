const { genIdList, genIdTask } = require('./helper')

const lists = [
    { id: genIdList(), title: 'First list', tasks: [{ id: 1, name: 'List 1' }] },
    { id: genIdList(), title: 'Second list', tasks: [{ id: 1, name: 'New list 2' }] },
    { id: genIdList(), title: 'Third list', tasks: [{ id: 1, name: 'NW 3' }] }
]

const getAllLists = () => {
    return lists;
}
const createList = data => {
    return {
        id: genIdTask(),
        name: data.name,
        done: false
    }
}
const getList = (id) => {
    const list = lists.find(list => list.id === id)
    return list === undefined ? false : list
}
const addList = data => { 
    const list = createList(data);
    lists.push(list)
    return lists
}
const editList = (id, data) => {
    let list = lists.find((list) => list.id === id);
    if (list !== undefined) {
        Object.assign(list, data)
        return list
    } else {
        return false
    }
}
const deleteList = (id) => { 
    const deliver = lists.findIndex((name) => name.id === id)
    if (deliver !== -1) { // если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
       const deletedList = lists.splice(deliver, 1) // filter() != id
        return deletedList
    } else {
        return false
    }
}

module.exports = { genIdTask, getList, getAllLists, createList, editList, deleteList, addList, lists };