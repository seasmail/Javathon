import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Company} from './company.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE' })
};
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  public getCompanies(): Observable<any> {
    console.log('------------- api ');
    return this.http.get('http://localhost:8080/api/company/get', httpOptions);
  }
}
