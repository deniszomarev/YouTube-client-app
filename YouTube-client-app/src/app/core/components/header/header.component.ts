import { Component, OnInit } from '@angular/core';
import { ResultSearchServiceService } from '../../services/result-search-service/result-search-service.service';
import { LoginService } from '../../services/login-service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isDropdown: boolean = false;
  constructor(
    private resultSearchService: ResultSearchServiceService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  public toggleDropdown(): void {
    this.isDropdown = !this.isDropdown;
  }
  public searchUpdate(): void {
    this.resultSearchService.updateCards();
  }
  public logout(): void {
    this.loginService.deleteToken();
    this.router.navigate(['login']);
  }
  public hideLogout(): boolean {
    return !!this.loginService.getToken();
  }
}
