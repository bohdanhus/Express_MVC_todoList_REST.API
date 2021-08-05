function checkResFromServer(answer, res, yes, no) {
    if (answer) {
      res.status(yes)
      res.json(answer)
      res.end()
    } else {
      res.status(no)
      res.end()
    }
}
const getListId = (req) => {
    const listId = req.params.listId !== undefined ? req.params.listId : req.query.listId
    return parseInt(listId)
}
  
module.exports = { getListId, checkResFromServer };
