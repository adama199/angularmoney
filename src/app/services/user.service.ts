import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: any)
  {
    console.log(data);
    return this.http.post<any>(`${environment.apiUrl}/api/users`, data );
  }
  getFindUsers()
  {
    return this.http.get(`${environment.apiUrl}/api/showusers`);
  }
  getStatus(id: number)
  {
    return this.http.get(`${environment.apiUrl}/api/users/status/${id}`);
  }
}
