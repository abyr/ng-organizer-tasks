import { Component, OnInit } from '@angular/core';
import { TaskListService } from './task-list.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
    taskList: Task[]; 
    
    constructor(private taskListService: TaskListService) { }
    
    ngOnInit() {
        this.taskList = this.getTaskList();
    }
    
    getTaskList() {
        return this.taskListService.getList();
    }
    
    highlight(title: string) {
      console.log('highlight', title);
    }
    
}
