import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {
     if (!Object.keys(filter).some((key) => filter[key] != "")){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter).filter((key) => filter[key] != "");

      if (defaultFilter) {
        return items.filter(item =>
            filterKeys.reduce((x, keyName) =>
                (x && new RegExp(filter[keyName], 'gi').test(item[keyName])), true));
      }
      else {
        return items.filter(item => {
          return filterKeys.every((keyName) => {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]);
          });
        });
      }
    }
  }
}