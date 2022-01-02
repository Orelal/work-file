import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(word:string,searched:string):boolean {
    if(word.indexOf(searched)>-1){
      return false
    }
    return true
  }

}
