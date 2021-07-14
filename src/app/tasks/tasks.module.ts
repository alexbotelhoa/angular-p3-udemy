import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  TaskService,
  TaskCompletedDirective
} from './shared';
import { ListTaskComponent } from './list-task';
import { CreateTaskComponent } from './create-task';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    ListTaskComponent,
    CreateTaskComponent,
    EditTaskComponent,
    TaskCompletedDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
