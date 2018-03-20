import { Injectable } from '@angular/core';

import { Task } from '../models/task';
import { LocalStorageService } from '../storage/local-storage.service';

@Injectable()
export class TaskListService {

    taskList: Task[];
    listKey: string;
    
    constructor(private localStorageService: LocalStorageService) {
        this.listKey = 'task-list';
    }

    getList(): Task[] {
        return this.localStorageService.getObject(this.listKey) || [];
    }
    
    setList(taskList: Task[]): void {
        this.localStorageService.setObject(this.listKey, taskList);
    }
}
