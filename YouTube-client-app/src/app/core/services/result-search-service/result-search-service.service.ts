import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
const API_KEY: string = 'AIzaSyC0Qk0kpYacHnDwnuFoLmU29g89SBqEc1c';

@Injectable({
  providedIn: 'root',
})
export class ResultSearchServiceService {
  private cardsState$: BehaviorSubject<any> = new BehaviorSubject({});
  private filterState$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  public updateCards(): void {
    this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${API_KEY}&type=video&part=snippet,contentDetails,statistics&maxResults=50`
      )
      .subscribe((res) => this.cardsState$.next(res));
  }
  public updateCardsBySearch(keyWord:string):void {
    this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?q=${keyWord}&key=${API_KEY}&type=video&part=snippet&maxResults=50`
      )
      .subscribe((res) => this.cardsState$.next(res));
  }

  public getCardById(id: string | null): Observable<any> {
    return this.http
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&type=video&part=snippet,contentDetails,statistics`
      )
      .pipe(map((res: any) => res.items[0]));
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

  public updateFilter(value: string): void {
    this.filterState$.next(value);
  }
  public getFilterState(): Observable<string> {
    return this.filterState$.asObservable();
  }
}
