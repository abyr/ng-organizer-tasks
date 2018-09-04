import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { TaskListService } from '../task-list/task-list.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input()
  task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskListService: TaskListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTask()
  }
  
  getTask(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.task = this.taskListService.getTask(title);;
  }

}
