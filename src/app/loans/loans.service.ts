import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  private endpoint = 'http://ec2-3-83-96-241.compute-1.amazonaws.com/solicitude';

  constructor(private http: HttpClient) { }

  public getLoans(): Observable<Loan[]>{
    return this.http.get<Loan[]>(this.endpoint);
  }
}
