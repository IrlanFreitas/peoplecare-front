import { PatientsService } from '../../../patients.service';
import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/patient';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css'],
})
export class HandleComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  @Input() patient = {};

  panelOpenState = false;
  newPatient = true;

  constructor(
    private patientsService: PatientsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      occupation: [''],
    });
  }

  onSubmit(): void {
    console.log({ form: this.form });

    if (this.form.valid) {
      this.patientsService.create(this.form.value).subscribe(() => {
        console.log('Enviando os dados do paciente');
        // this.router.navigate(['/']);
        // ! Toast que foi adicionado com sucesso!
        this.form.reset();
        this.patientsService.getAll();
      });
      return;
    }
  }
}
