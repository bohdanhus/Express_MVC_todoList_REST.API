const { getList, getAllLists, editList, deleteList, addList  }  = require('../models/list.js')

class ListController {
    getAllLists() {
        return getAllLists()
    }
    getList(id) {
        return getList(id)
    }
    editList(id, data) {
        return editList(id, data)  
    }
    createList(data) {
        return addList(data)
    }
    deleteList(id) {
        return deleteList(id)
    }
}

module.exports = new ListController()