import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value.email = '유나쓰' + value.email;
    return value;
  }
}
