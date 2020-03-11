import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(
    private http: HttpClient
  ) { }
  getRoles (){
    return this.http.get(`${environment.apiUrl}/api/role`);
  }
}
