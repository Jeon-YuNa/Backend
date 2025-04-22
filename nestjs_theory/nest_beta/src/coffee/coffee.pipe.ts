import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CoffeePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value.coffee = value.coffee + '수임커피';
    return value;
  }
}
