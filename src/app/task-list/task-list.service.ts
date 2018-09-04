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
    
    getTask(title: string) {
        const list = this.localStorageService.getObject(this.listKey) || [];
        
        if (list.length) {
            return list.find(x => x.title === title);
        }
        return;
    }
}
