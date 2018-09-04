import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskListService } from './task-list.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
    taskList: Task[]; 
    
    todoCount: Number;
    
    constructor(private taskListService: TaskListService) { }
    
    ngOnInit() {
        this.resetList();
    }
    
    addTask(task) {
        this.resetList(this.taskList.concat(task));
    }
    
    removeFromList(title: string) {
        const filteredList = this.taskList.filter(x => x.title !== title);
        
        this.resetList(filteredList);
    }
    
    saveChanges() {
        this.taskListService.setList(this.taskList);
        this.todoCount = this.taskList.filter(x => !x.done).length;
    }
    
    resetList(list?: Task[]) {
        if (list) {
            this.taskListService.setList(list);
        }
        this.taskList = this.getTaskList();
        this.todoCount = this.taskList.filter(x => !x.done).length;
    }
    
    getTaskList() {
        return this.taskListService.getList();
    }
    
}
