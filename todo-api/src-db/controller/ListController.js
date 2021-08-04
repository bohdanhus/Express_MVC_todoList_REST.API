const { listModel }= require('../models/index.js')

class ListController {
    getAllLists() {
        return listModel.getAllLists()
    }
    getList(id) {
        return listModel.getList(id)
    }
    editList(req) {
        const listId = parseInt(req.params.listId)
        const data = req.body
        return listModel.editTask(listId, data)  
    }
    createList(req) {
        const data = req.body
        return listModel.addList(data)
    }
    removeTask(req) {
        const listId = parseInt(req.params.listId)
        return listModel.removeTask(listId)
    }
}
module.exports = new ListController()