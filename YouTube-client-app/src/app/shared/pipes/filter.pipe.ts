import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], inputFilter: string): any[] {
    return value.filter((el) => {
      return el.snippets?.title.includes(inputFilter);
    });
  }
}
