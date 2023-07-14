import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSettingsComponent } from './components/dropdown-settings/dropdown-settings.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [DropdownSettingsComponent, HeaderComponent],
  imports: [CommonModule],
})
export class CoreModule {}
