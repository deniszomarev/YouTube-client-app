import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultSearchServiceService {
  constructor(private http: HttpClient) {}

  public getResultSearch(): Observable<any> {
    return this.http.get('assets/response.json');
  }
}
