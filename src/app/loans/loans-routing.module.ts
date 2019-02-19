import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoansListComponent } from './loans-list/loans-list.component';

const routes: Routes = [
  {path: '', component: LoansListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
