const incList = (init = 0) => () => ++init
const genIdList = incList()

const incTask = (init = 0) => () => ++init
const genIdTask = incTask()

module.exports = {genIdList, genIdTask}