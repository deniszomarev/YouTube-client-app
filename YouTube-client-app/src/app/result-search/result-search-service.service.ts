import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultSearchServiceService {
  private cardsState$: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(private http: HttpClient) {}

  public updateCards(): void {
    this.http.get('assets/response.json').subscribe((res) => {
      this.cardsState$.next(res);
    });
  }
  public getCardsState(): Observable<any> {
    return this.cardsState$.asObservable();
  }
}
