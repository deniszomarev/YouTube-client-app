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

  public sortCardsBy(property: string, order: 'asc' | 'desc'): void {
    const currentCardsState = this.cardsState$.value;
    currentCardsState.items?.sort((a: any, b: any) => {
      if (property == 'publishedAt') {
        return order === 'asc'
          ? new Date(a.snippet[property]).getTime() -
              new Date(b.snippet[property]).getTime()
          : new Date(b.snippet[property]).getTime() -
              new Date(a.snippet[property]).getTime();
      } else {
        return order === 'asc'
          ? a.statistics[property] - b.statistics[property]
          : b.statistics[property] - a.statistics[property];
      }
    });
    this.cardsState$.next(currentCardsState);
  }
}
