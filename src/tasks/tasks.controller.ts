import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';


@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(
        // @Body('this is what the key will be called in the body of the request?')
        // this is retriving the request parameters 
        @Body('title') title: string,
        @Body('description') description: string,
    ): Task { // :Task being the return type
        return this.tasksService.createTask(title, description);
    }
}


// The controllers job is to somply handle the request and return a response.
// Inbetween it is calling the service. 