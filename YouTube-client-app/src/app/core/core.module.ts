import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSettingsComponent } from './components/dropdown-settings/dropdown-settings.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [DropdownSettingsComponent, HeaderComponent, Page404Component],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
