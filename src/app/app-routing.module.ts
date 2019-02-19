import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'students', loadChildren: './students/students.module#StudentsModule'},
  {path: 'loans', loadChildren: './loans/loans.module#LoansModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
