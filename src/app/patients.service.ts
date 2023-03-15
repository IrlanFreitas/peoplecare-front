import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

// aqui com json-server
  private baseUrl = 'http://localhost:3000/patients';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/`);
  }

  getBy(id: number): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/${id}`);
  }

  create(patient: Patient) {
    return this.httpClient.post<Patient>(`${this.baseUrl}/`, patient);
  }
}
