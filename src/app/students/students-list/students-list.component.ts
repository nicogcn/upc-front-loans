import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  studentsObservable: Observable<Student[]>;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsObservable = this.studentsService.getStudents();
  }

}
