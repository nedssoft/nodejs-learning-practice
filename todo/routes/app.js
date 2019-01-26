import express from 'express'
import TodoController from '../controllers/todo'
const router = express.Router()

const versionEndpoint = '/api/v1/todos/'

router.get(versionEndpoint, TodoController.getAllTodo)
router.get(`${versionEndpoint}:id`, TodoController.getATodo)
router.post(versionEndpoint, TodoController.createTodo)
router.get('/todos/view', TodoController.showTodoPage)
router.get('/', TodoController.index)


export default router
