import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) {
  }

  public getClients(): Observable<any> {
    console.log('------------- api ');
    return this.http.get('http://localhost:8080/api/client/get', httpOptions);
  }

  public getClientBonus(clientId: number, companyId: number): Observable<any> {
    console.log('------------- api ');
    return this.http.get('http://localhost:8080/api/bonus/findbonus?clientId=' + clientId + '&companyId=' + companyId, httpOptions);
  }

  public increaseBonus(phone: string, name: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/bonus/increase?clientPhoneNumber=' + phone + '&companyName=' + name, httpOptions);
  }
  public resetBonus(phone: string, name: string) {
    return this.http.post('http://localhost:8080/api/bonus/resetBonuses?clientPhoneNumber=' + phone + '&companyName=' + name, httpOptions);
  }
}
