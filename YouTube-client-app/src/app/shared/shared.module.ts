import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { BorderColorDirective } from './directives/border-color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilterPipe, BorderColorDirective],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FilterPipe,
    BorderColorDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
