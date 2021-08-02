const incList = (init = 0) => () => ++init
const genIdList = incList()
const incTask = (init = 0) => () => ++init
const genIdTask = incTask()

const lists = [
    { id: genIdList(), tasks: [{ id: 1, name: 'New list 1' }], title: 'First list' },
    { id: genIdList(), tasks: [{ id: 1, name: 'New list 2' }], title: 'Second list' },
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

const getList = id => {
    const list = lists.find(list => list.id === id)
    return list === undefined ? false : list
}

const addList = data => { 
    const list = createList(data);
    lists.push(list)
    return lists
}

const removeList = id => { 
    const deliver = lists.findIndex(name => name.id === id)
    if (deliver !== -1){ // если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
        lists.splice(id - 1, 1) // filter() != id
        return true
    } else {
        return false;
    }
}

const editList = (id, data) => {
    let list = lists.find(list => list.id === id);
    return list === undefined ? Object.assign(list, data) : false 
}

// const changeList = (id, data) => { 
//     lists.find(name => name.id === id)
//     return lists[id - 1] = {
//         id: id,
//         name: data.name,
//         done: data.done,
//     };
// }

module.exports = { genIdTask, lists, getAllLists, createList, editList, removeList, addList }
