import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Order } from './entities/orders.entity';
import { OrdersService } from './orders.service';
import { Line } from './entities/line.entity';
import { Recipe } from './entities/recipe.entity';
import { GropuedRecipe, LayerGroup } from 'src/status/dto/sort-out-recipe.inputs';
import { Material } from './entities/material.entity';
import { CreateMaterialInput } from './dto/create-material.input';

@Resolver(() => Order)
export class OrdersResolver {
    constructor(private readonly ordersService:OrdersService){}

    @Query(()=>[Order], { name: 'ORDER' })
    async getOrders():Promise<Order[]>{
        return this.ordersService.findAll();
    }

    @Query(() => [Order], { name: 'orderOffset' })
    async findOffset(
        @Args('page', { type: () => Int, nullable: true }) page?: number, 
        @Args('pageSize', { type: () => Int, nullable: true }) pageSize?: number
    ): Promise<Order[]> {
        // Si no se recibe page, asignamos 1 como valor predeterminado
        const currentPage = page ?? 1;
        // Si no se recibe pageSize, asignamos Infinity para obtener todos los registros
        const currentPageSize = pageSize ?? Infinity;
    
        return this.ordersService.findOffset(currentPage, currentPageSize);
    }
    

    @Query(()=>[Line], {name: 'getLines'})
    async findAllLines(){
        return this.ordersService.findLine();
    }

    @Query(()=>[Recipe], {name:'getRecipes'})
    async findRecipes(
        @Args('page', {type: ()=>Int, defaultValue: 1}) page:number,
        @Args('pageSize', {type: ()=>Int, defaultValue: 10}) pageSize:number,
    ){
        return this.ordersService.findAllRecipe();
    }

    @Query(()=>[Material], {name: 'getAllMaterial'})
    async findAllMaterial(){
        return this.ordersService.findAllMaterial();
    }

    @Query(() => [String], { name: 'uniqueRecipes' })
    async getUniqueRepznrUnis(): Promise<string[]> {
        return this.ordersService.findUniqueRepznrUniAll();
    }


    @Query(()=>[Recipe], {name:'getRecipesId'})
    async findRecipesByRepznrUni(
        @Args('reciptNumber',  {type: () => String}) reciptNumber: string,
     ){
         return this.ordersService.findOneRecipe(reciptNumber);
     }


    @Query(()=>GropuedRecipe, { name:'getRecipeSortedByLayer' })
    async findRecipeSortedByLayer(
        @Args('reciptNumber',  {type: () => String}) reciptNumber: string,
    ): Promise<GropuedRecipe> {
        const recipes = await this.ordersService.findOneRecipe(reciptNumber);

        if(!recipes || recipes.length === 0) {
            return{
                repznrUni: reciptNumber,
                layers: []
            }
        };

        const repznrUni = recipes[0].repznrUni;

        const layersMap = new Map<string, LayerGroup>()

        recipes.forEach(recipe => {
            
            const key = `${recipe.layer}`
            
            if (!layersMap.has(key)) {
                layersMap.set(key, {
                  layer: recipe.layer,
                  layerProportion: recipe.layerProportion,
                  repznrMat: recipe.repznrMat,
                  recipes: [],
                });
            }
            layersMap.get(key).recipes.push(recipe);
        });

        const layers = Array.from(layersMap.values());

        return {
            repznrUni,
            layers
        }
    }

    @Mutation(()=>Material, {name:'createMaterial'})
    async createMaterial(
        @Args('createMaterialInput') createMaterialInput: CreateMaterialInput,
    ): Promise<Material> {
        return this.ordersService.create(createMaterialInput)
    }

}
