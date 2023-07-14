import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultSearchComponent } from './youtube/components/result-search/result-search.component';

const routes: Routes = [{ path: '', component: ResultSearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
