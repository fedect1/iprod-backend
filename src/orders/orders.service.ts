import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { Line } from './entities/line.entity';
import { Recipe } from './entities/recipe.entity';
import { Material } from './entities/material.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order) 
        private readonly orderRepository: Repository<Order>,
            
        @InjectRepository(Line) 
        private readonly lineRepository:Repository<Line>,
            
        @InjectRepository(Recipe) 
        private readonly recipeRepository:Repository<Recipe>,
            
        @InjectRepository(Material) 
        private readonly materialRepository:Repository<Material>
    ) {}
    
    async findAll(): Promise<Order[]> {
        return await this.orderRepository.find();
    }

    async findLine(): Promise<Line[]> {
        return await this.lineRepository.find();
    }


    async findOffset(page = 1, pageSize = 10): Promise<Order[]> {
        return this.orderRepository.find({
          take: pageSize,
          skip: (page - 1) * pageSize,
          order: {
            datetime: 'DESC',
          },
        });
    }

    async findAllRecipe(page = 1, pageSize = 10): Promise<Recipe[]> {
        return await this.recipeRepository.find({
            take: pageSize,
            skip: (page - 1) * pageSize,
            order : {
                recipeId: 'DESC',
            },
        });
    }

    async findUniqueRepznrUniAll(): Promise<string[]> {
        const uniqueRepznrUnis = await this.recipeRepository
            .createQueryBuilder('recipe')
            .select('DISTINCT recipe.repznrUni', 'repznrUni')
            .where('recipe.repznrUni IS NOT NULL') 
            .getRawMany();
        return uniqueRepznrUnis.map(record => record.repznrUni);
    }

    async findOneRecipe(recipeNumber:string): Promise<Recipe[]> {
        return await this.recipeRepository.find({
            where: {
                repznrUni: recipeNumber
            },
        });
    }


    async findAllMaterial(): Promise<Material[]> {
        return await this.materialRepository.find()
    }
}
