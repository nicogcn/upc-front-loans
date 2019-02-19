import { Component, OnInit } from '@angular/core';
import { LoansService } from '../loans.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent implements OnInit {

  loansObservable: Observable<Loan[]>;

  constructor(private loansService: LoansService) { }

  ngOnInit() {
    this.loansObservable = this.loansService.getLoans();
  }

}
