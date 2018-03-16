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
  selected = new EventEmitter<string>();
  
  toggleSelected() {
    console.log('toggle selected');
    this.task.done = !this.task.done;
    this.selected.emit(this.task.title);
  }
  
  ngOnInit() {}
}
