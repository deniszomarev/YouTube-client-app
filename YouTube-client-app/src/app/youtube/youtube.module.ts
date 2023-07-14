import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';

@NgModule({
  declarations: [CardComponent, ResultSearchComponent],
  imports: [CommonModule, SharedModule],
})
export class YoutubeModule {}
