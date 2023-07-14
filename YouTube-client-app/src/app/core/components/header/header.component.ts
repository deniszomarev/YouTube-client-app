import { Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from '../../services/result-search-service/result-search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isDropdown: boolean = false;
  constructor(private resultSearchService: ResultSearchServiceService) {}

  ngOnInit(): void {}
  public toggleDropdown(): void {
    this.isDropdown = !this.isDropdown;
  }
  public searchUpdate(): void {
    this.resultSearchService.updateCards();
  }
}
