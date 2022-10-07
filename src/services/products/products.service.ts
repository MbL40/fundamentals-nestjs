import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const productToFound = this.products.find((item) => item.id === id);
    if (!productToFound) {
      throw new NotFoundException(`El producto con id ${id} no existe`);
    }
    return productToFound;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => {
      item.id === id;
    });
    if (index === -1) {
      throw new NotFoundException(
        `El producto a borrar con el id ${id} No existe`,
      );
    }
    this.products.splice(index, 1);
    return true;
  }
}
