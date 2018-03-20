import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateTaskComponent implements OnInit {
  
    task: Task;
    
    @Output()
    addTask = new EventEmitter<Task>();
    
    ngOnInit() {
        this.task = new Task();
    }
  
    save() {
        this.addTask.emit(this.task);
        this.resetData();
    }
  
    cancel() {
        this.resetData();
    }
    
    resetData() {
        this.task = new Task();
    }

}
