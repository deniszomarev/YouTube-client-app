import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultSearchComponent } from './youtube/components/result-search/result-search.component';
import { Page404Component } from './core/pages/page404/page404.component';

const routes: Routes = [
  { path: '', component: ResultSearchComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
