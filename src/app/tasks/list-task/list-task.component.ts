import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
  }

  listAll(): Task[] {
  	return this.taskService.listAll();
  }

  delete($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Deseja delete a task "' + task.name + '"?')) {
      this.taskService.delete(task.id);
      this.tasks = this.listAll();
    }
  }

  alterStatus(task: Task): void {
    if (confirm('Deseja alterar o status da task "' + task.name + '"?')) {
      this.taskService.alterStatus(task.id);
      this.tasks = this.listAll();
    }
  }
}
