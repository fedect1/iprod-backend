import { Field, Float, ObjectType } from "@nestjs/graphql";
import { Recipe } from "src/orders/entities/recipe.entity";



@ObjectType()
export class LayerGroup {
    @Field()
    layer: string;

    @Field(()=>Float, {nullable: true})
    layerProportion?: number;

    @Field({nullable: true})
    repznrMat?: string;

    @Field(()=>[Recipe], {nullable: 'itemsAndList'})
    recipes: Recipe[];
}

@ObjectType()
export class GropuedRecipe {
    @Field()
    repznrUni: string;

    @Field(()=>[LayerGroup], { nullable: 'itemsAndList' })
    layers: LayerGroup[]
}