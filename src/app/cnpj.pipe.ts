import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CNPJ'
})
export class CNPJPipe implements PipeTransform {

  transform(value:any): any {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
  }

}
