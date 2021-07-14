import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskRoutes } from './tasks';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks/list-task',
    pathMatch: 'full'
  },
  ...TaskRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
