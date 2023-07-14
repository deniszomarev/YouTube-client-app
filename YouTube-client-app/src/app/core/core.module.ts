import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSettingsComponent } from './components/dropdown-settings/dropdown-settings.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DropdownSettingsComponent, HeaderComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
