import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
// import * as uuid from 'uuid/v1';
import { uuid } from 'uuidv4';

@Injectable()
export class TasksService {
    // Task[] is just setting the type of task.
    // without the type ot would look like 
    // private tasks: [] which is setting tasks to an empty array 
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }
}
