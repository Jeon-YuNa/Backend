import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return '상품 만들기';
  }

  findAll() {
    return `상품 모두 찾기`;
  }

  findOne(id: number) {
    return `${id} 상품 찾기`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `${id} 상품 업데이트`;
  }

  remove(id: number) {
    return `${id} 상품 삭제하기`;
  }
}
