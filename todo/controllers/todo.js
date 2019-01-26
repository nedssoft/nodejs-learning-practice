import db from '../db/db.js';

class TodoController {
    getAllTodo(req, res) {
        return res.status(200).send({
            success: true,
            message: 'success',
            todo: db
        })
        
    }

    getATodo(req, res) {
        const id = parseInt(req.params.id);
        db.map(todo =>{
            
            if(todo.id == id) {
                return res.status(200).send({
                    success: true,
                    message: 'success',
                    todo
                })
            }
        })

        return res.status(404).send({
            error: true,
            message: `Todo with ID ${req.params.id} is not found`
        })
    }

    createTodo (req, res) {
        if (!req.body.title) {
            return res.status(400).send({
                success: false,
                message: 'Title field is required',
            })
        }
        else if (!req.body.description) {
            return res.status(400).send({
                success: false,
                message: 'Description field is required',
            })
        }

        const newTodo = {
            id: db.length +1,
            title: req.body.title,
            description: req.body.description
        }

        db.push(newTodo)

        return res.status(200).send({
            success: true,
            message: 'todo created'
        });
    }

    showTodoPage (req, res) {
        return res.render('todos')
    }
    index (req, res) {
        return res.render('index')
    }
}

const todoController = new TodoController()
export default todoController