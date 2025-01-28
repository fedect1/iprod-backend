import { Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/orders.entity';
import { Line } from './entities/line.entity';
import { Recipe } from './entities/recipe.entity';
import { Rawmat } from './entities/rawmap.entity';
import { Material } from './entities/material.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order, 
      Line, 
      Recipe, 
      Rawmat, 
      Material
    ]),
  ],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}

