import { Patient } from './patient';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'peoplecare';
  patient: Patient = {
    id: 0,
    name: '',
    cpf: '',
    birthDate: new Date(),
    occupation: '',
  };
}
