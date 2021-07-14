import { Routes } from '@angular/router';

import { ListTaskComponent } from './list-task';
import { CreateTaskComponent } from './create-task';
import { EditTaskComponent } from './edit-task';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTaskComponent
    },
    {
        path: 'tasks/create',
        component: CreateTaskComponent
    },
    {
        path: 'tasks/edit/:id',
        component: EditTaskComponent
    }
];
