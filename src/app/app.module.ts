import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { TaskListService } from './task-list/task-list.service';

import { PluralPipe } from './pipes/plural.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    PluralPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
