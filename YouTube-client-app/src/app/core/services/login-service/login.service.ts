import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private authToken: string =
    'P4o0USS1qbcuY?-QerwkL348nTd6L6d-6TVgGBNKzbfDFAI7n!flzIUxQ=lNIIDD';

  constructor() {}

  public setToken() {
    localStorage.setItem('fakeToken', this.authToken);
  }
  public getToken() {
    localStorage.getItem('fakeToken');
  }
  public deleteToken() {
    localStorage.removeItem('fakeToken');
  }
}
