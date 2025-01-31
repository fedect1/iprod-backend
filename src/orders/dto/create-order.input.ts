import { InputType, Field, Int, GraphQLISODateTime } from "@nestjs/graphql";


@InputType()
export class CreateOrderInput{
    @Field(() => Int)
    number: number;
    
    @Field(() => Int)
    position: number;

    @Field()
    article: string;

    @Field(() => Int)
    recipe: string;
    
    @Field(() => Int)
    system: number;

}