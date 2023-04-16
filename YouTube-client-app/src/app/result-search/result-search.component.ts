import { Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from './result-search-service.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent implements OnInit {
  public cards$: Observable<any> = this.resultSearchServiceService
    .getResultSearch()
    .pipe(map((res) => res.items));
  constructor(private resultSearchServiceService: ResultSearchServiceService) {}

  ngOnInit(): void {}
}
