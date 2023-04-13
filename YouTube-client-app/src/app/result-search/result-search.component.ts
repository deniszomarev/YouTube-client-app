import { Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from './result-search-service.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent implements OnInit {
  constructor(private resultSearchServiceService: ResultSearchServiceService) {}

  ngOnInit(): void {
    const result = this.resultSearchServiceService.getResultSearch();
    console.log(result);
  }
}
