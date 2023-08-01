import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultSearchComponent } from './youtube/components/result-search/result-search.component';
import { Page404Component } from './core/pages/page404/page404.component';
import { LoginComponent } from './core/pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DetailsComponent } from './core/pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ResultSearchComponent,
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
