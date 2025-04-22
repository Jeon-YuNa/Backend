import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  // ORM 라이브러리 == [레포지토리(Repository)]
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    //새 객체 인스턴스 생성
    const newProduct = this.productRepository.create(createProductDto);
    //객체 DB 저장
    this.productRepository.save(newProduct);
    return '새상품 저장됨';
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
