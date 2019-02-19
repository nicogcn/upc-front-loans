import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansListComponent } from './loans-list/loans-list.component';

@NgModule({
  declarations: [LoansListComponent],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
