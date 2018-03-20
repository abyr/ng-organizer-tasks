import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input()
  task: Task;
  
  @Output()
  statusChanged = new EventEmitter<string>();
  
  @Output()
  removeTask = new EventEmitter<string>();
  
  toggleDone() {
    console.log('toggle selected');
    this.task.done = !this.task.done;
    this.statusChanged.emit(this.task.title);
  }
  
  remove() {
    this.removeTask.emit(this.task.title);
  }
  
  ngOnInit() {}
}
