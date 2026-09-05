const taskService = require('../services/taskService');
const logger = require('../utils/logger');

module.exports = {
    TaskService: {
        TaskServicePort: {
            GetTasks(args, callback){
                const tasks = taskService.getTask();
                logger.info("Lista de tareas enviadas en soap");
                callback({task: tasks})
            },
            AddTask(args, callback){
                const task = taskService.createTask(args.title);
                logger.info("Tarea creada en soap");
                callback({ task });
            }
        }
    }
}