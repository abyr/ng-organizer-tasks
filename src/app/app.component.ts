import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  task: Task; 
  
  title = 'Organiser. Tasks';
  
  openTask(task: Task) {
    this.task = task;
  }
}
