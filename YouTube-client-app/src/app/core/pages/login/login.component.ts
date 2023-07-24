import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login-service/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    login: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.loginForm.patchValue({ login: 'privet' });
    // this.loginForm.get('login')?.disable();
    // this.loginForm.valueChanges.subscribe((value) => console.log(value));
  }

  public submit() {
    // console.log(this.loginForm);
    // console.log(this.loginForm.getRawValue());
    // console.log(this.loginForm.value);
    this.loginService.setToken();
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
