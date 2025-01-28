import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';


@ObjectType() 
@Entity({ name: 't_av_order' }) 
export class Order {
  @PrimaryColumn({ name: 'ORDER_ORDER', type: 'int' })
  @Field(() => Int)
  idwebmip: number;

  @Column({ name: 'ORDER_AVID', type: 'varchar',length: 20, nullable: true })
   @Field()
  number: string;

  @Column({ name: 'ORDER_POSITION', type: 'tinyint', nullable: true })
  @Field( () => Int)
  position: number;

  @Column({ name: 'ORDER_ARTICLE', type: 'varchar', length: 20, nullable: true })
  @Field({ nullable: true })
  article: string;

  @Column({ name: 'ORDER_RECIPE', type: 'varchar', length: 20, default: 0 })
  @Field({ nullable: true })
  recipe: string;

  @Column({ name: 'ORDER_SYSTEM', type: 'int', default: 0 })
  @Field(() => Int)
  system: number;

  @Column({ name: 'ORDER_EXTRUDER', type: 'varchar', default: 0 })
  @Field({ nullable: true })
  extruder: string;

  @Column({ name: 'ORDER_DATETIME', type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  @Field(() => GraphQLISODateTime)
  datetime: Date;

  @Column({ name: 'ORDER_STATUS', type: 'tinyint', default: 0 })
  @Field()
  status: number;
}