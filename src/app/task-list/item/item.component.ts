import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class TaskListItemComponent implements OnInit {
  
  @Input()
  task: Task;
  
  @Output()
  statusChanged = new EventEmitter<string>();
  
  @Output()
  removeTask = new EventEmitter<string>();
  
  toggleDone() {
    this.task.done = !this.task.done;
    this.statusChanged.emit(this.task.title);
  }
  
  remove() {
    this.removeTask.emit(this.task.title);
  }
  
  ngOnInit() {}
}
