const { listModel }= require('../models/index.js')

class ListController {
    getAllLists() {
        return listModel.getAllLists ()
    }
    getList(id) {
        return listModel.getList (id)
    }
    editList(req) {
        const id = parseInt(req.params.id)
        const data = req.body
        return listModel.editTask(id, data)  
    }
    createList(req) {
        const data = req.body
        return listModel.addList(data)
    }
    removeTask(req) {
        const id = parseInt(req.params.id);
        return listModel.removeTask(id)
    }
}
module.exports = new ListController()