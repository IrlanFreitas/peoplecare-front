import { PatientsService } from '../../../patients.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/patient';

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css']
})
export class HandleComponent implements OnInit {

  patientForm: Patient = {
    id: 0,
    name: '',
    birthDate: new Date(),
    cpf: '',
    occupation: '',
  };

  panelOpenState = false;
  newPatient = true;

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

  create() {
    this.patientsService.create(this.patientForm).subscribe(() => {
      // this.router.navigate(['/']);
    });
  }
}
