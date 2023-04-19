import { Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from '../result-search/result-search-service.service';

@Component({
  selector: 'app-dropdown-settings',
  templateUrl: './dropdown-settings.component.html',
  styleUrls: ['./dropdown-settings.component.scss'],
})
export class DropdownSettingsComponent implements OnInit {
  constructor(public resultSearchServiceService: ResultSearchServiceService) {}

  ngOnInit(): void {}

  // private sortCardsBy(property: string, order: 'asc' | 'desc'): void {
  //   this.resultSearchServiceService.sortCardsBy(property, order);
  // }
}
