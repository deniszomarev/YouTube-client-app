import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultSearchServiceService {
  private cardsState$: BehaviorSubject<any> = new BehaviorSubject({});
  private filterState$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private http: HttpClient) {}

  public updateCards(): void {
    this.http.get('assets/response.json').subscribe((res) => {
      this.cardsState$.next(res);
    });
  }
  public getCardById(id: string | null): Observable<any> {
    return this.http
      .get('assets/response.json')
      .pipe(map((res: any) => res.items.find((el: any) => el.id === id)));
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
    // console.log(currentCardsState);
  }

  public updateFilter(value: string): void {
    this.filterState$.next(value);
  }
  public getFilterState(): Observable<string> {
    return this.filterState$.asObservable();
  }
}
