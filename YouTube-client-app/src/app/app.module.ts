import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownSettingsComponent } from './dropdown-settings/dropdown-settings.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { CardComponent } from './result-search/card/card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { BorderColorDirective } from './shared/directives/border-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownSettingsComponent,
    ResultSearchComponent,
    CardComponent,
    FilterPipe,
    BorderColorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
