import { Injectable } from '@angular/core';

import { Task } from '../models/task';

@Injectable()
export class TaskListService {

    taskList: Task[];
    
    constructor() {
        this.taskList = [
            new Task('First task'), 
            new Task('Second task'),
            new Task('Third task')
        ];
    }    

    getList(): Task[] {
        return this.taskList;
    }

}
