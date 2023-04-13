import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResultSearchServiceService {
  constructor(private http: HttpClient) {}

  public getResultSearch(): any {
    return this.http.get('assets/response.json');
  }
}
