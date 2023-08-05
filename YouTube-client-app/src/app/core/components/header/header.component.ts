import { Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from '../../services/result-search-service/result-search-service.service';
import { LoginService } from '../../services/login-service/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isDropdown: boolean = false;
  public searchForm: FormGroup = new FormGroup({
    search: new FormControl(null),
  });
  constructor(
    private resultSearchService: ResultSearchServiceService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.resultSearchService.updateCards();
    this.searchForm.valueChanges.subscribe((searchValue) =>
      this.searchUpdate(searchValue.search)
    );
  }

  public toggleDropdown(): void {
    this.isDropdown = !this.isDropdown;
  }
  public searchUpdate(searchValue: string): void {
    this.resultSearchService.updateCardsBySearch(searchValue);
  }
  public logout(): void {
    this.loginService.deleteToken();
    this.router.navigate(['login']);
  }
  public hideLogout(): boolean {
    return !!this.loginService.getToken();
  }
}
