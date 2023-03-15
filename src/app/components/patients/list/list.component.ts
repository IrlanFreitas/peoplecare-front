import { PatientsService } from './../../../patients.service';
import { Patient } from './../../../patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allPatientsSource: Patient[] = [];
  displayedColumns: string[] = ['name', 'cpf',  'birthDate', 'actions'];


  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.patientsService.getAll().subscribe((data) => {
      this.allPatientsSource = data;
    });
  }
}
