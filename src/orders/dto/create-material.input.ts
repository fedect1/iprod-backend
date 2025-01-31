import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateMaterialInput {
  @Field(() => Int)
  rawmatKey: number;

  @Field({ nullable: true })
  rawmatName?: string;

  @Field({ nullable: true })
  rawmatShort?: string;

  @Field(() => Int, { nullable: true })
  rawmatTyp?: number;

  @Field(() => Float, { nullable: true })
  rawmatDensity?: number;

  @Field(() => Int, { nullable: true })
  rawmatBulkdens?: number;

  @Field(() => Float, { nullable: true })
  rawmatMFinal?: number;

  @Field(() => Int, { nullable: true })
  rawmatColor?: number;
}
