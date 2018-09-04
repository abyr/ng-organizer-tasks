import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list/item/item.component';
import { CreateTaskComponent } from './task-list/item/create/create.component';
import { TaskListService } from './task-list/task-list.service';
import { LocalStorageService } from './storage/local-storage.service';

import { PluralPipe } from './pipes/plural.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { TaskComponent } from './task/task.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent,
    CreateTaskComponent,
    PluralPipe,
    FilterListPipe,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [TaskListService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
