import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from './result-search-service.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent implements OnInit {
  public cards: any;
  public searchValue: string = '';
  constructor(private resultSearchServiceService: ResultSearchServiceService) {}

  ngOnInit(): void {
    this.getCards();
    this.getFilter();
  }

  public getCards(): void {
    this.resultSearchServiceService.getCardsState().subscribe((res) => {
      this.cards = res.items;
    });
  }
  public getFilter(): void {
    this.resultSearchServiceService.getFilterState().subscribe((res) => {
      this.searchValue = res;
    });
  }
}
