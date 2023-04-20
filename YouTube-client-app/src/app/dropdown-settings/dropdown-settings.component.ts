import { Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from '../result-search/result-search-service.service';

@Component({
  selector: 'app-dropdown-settings',
  templateUrl: './dropdown-settings.component.html',
  styleUrls: ['./dropdown-settings.component.scss'],
})
export class DropdownSettingsComponent implements OnInit {
  private order: 'asc' | 'desc' | undefined;
  private prevProperty: string | undefined;
  constructor(public resultSearchServiceService: ResultSearchServiceService) {}

  ngOnInit(): void {}

  public sortCardsBy(property: string): void {
    this.order =
      this.prevProperty === property
        ? this.order === 'asc'
          ? 'desc'
          : 'asc'
        : 'asc';
    this.prevProperty = property;

    this.resultSearchServiceService.sortCardsBy(property, this.order);
  }
}
