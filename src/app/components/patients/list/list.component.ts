import { PatientsService } from './../../../patients.service';
import { Patient } from './../../../patient';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allPatientsSource: Patient[] = [];
  displayedColumns: string[] = ['name', 'cpf',  'birthDate', 'edit', 'delete'];
  @Output() patientSelected = new EventEmitter<Patient>();

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.patientsService.getAll().subscribe((data) => {
      this.allPatientsSource = data;
    });
  }

  edit(patientSelected: Patient) {
    console.log({patient: patientSelected})
    alert(patientSelected)
    this.patientSelected.emit(patientSelected)
  }

  delete(element: Patient) {
    console.log({element})
    alert(element)
  }
}
