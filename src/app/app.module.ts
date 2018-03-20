import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './task/create/create.component';
import { TaskListService } from './task-list/task-list.service';
import { LocalStorageService } from './storage/local-storage.service';

import { PluralPipe } from './pipes/plural.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    CreateTaskComponent,
    PluralPipe,
    FilterListPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [TaskListService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
