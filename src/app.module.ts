import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductsController } from './controllers/products/products.controller';
import { UsersController } from './controllers/users/users.controller';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';
import { CustomersService } from './services/customers/customers.service';
import { ProductsService } from './services/products/products.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    UsersController,
    CustomerController,
  ],
  providers: [
    AppService,
    ProductsService,
    BrandsService,
    UsersService,
    CustomersService,
    CategoriesService,
  ],
})
export class AppModule {}
