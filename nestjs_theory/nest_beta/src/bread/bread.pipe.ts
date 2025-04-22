import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class BreadPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value.bread = value.bread + '수임빵';
    return value;
  }
}
