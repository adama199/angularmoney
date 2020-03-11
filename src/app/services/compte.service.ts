import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(
    private http: HttpClient
  ) { }

  compteNew_Partenaire(data: any)
  {
    return this.http.post<any>(`${environment.apiUrl}/api/newcomptep`, data );
  }

  getComptes()
  {
    return this.http.get(`${environment.apiUrl}/api/allcomptes`);
  }
}
