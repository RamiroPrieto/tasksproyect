import { Router } from "express";
import {
    getTask,
    createTasks,
    deleteTask,
    updateTask,
    getTasks
} from '../controllers/tasks.controllers.js'

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTasks);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);


export default router