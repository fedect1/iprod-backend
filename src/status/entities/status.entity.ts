import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';


@ObjectType() 
@Entity({ name: 't_line' }) 
export class Status {
  @PrimaryColumn({ name: 'LINE_LINE', type: 'int' })
  @Field(() => Int)
  lineLine: number;

  @Column({ name: 'LINE_ID', type: 'int', nullable: false })
   @Field()
  lineId: string;

  @Column({ name: 'LINE_NAME', type: 'varchar', length: 30, nullable: false })
  @Field()
  lineName: string;

  @Column({ name: 'LINE_SHORT', type: 'varchar', length: 10, nullable: false })
  @Field()
  lineShort: string;

  @Column({ name: 'LINE_TYPE', type: 'int', default: 0 })
  @Field(() => Int)
  lineType: number;

  @Column({ name: 'LINE_NDOS', type: 'int', default: 0 })
  @Field(() => Int)
  lineNdos: number;

  @Column({ name: 'LINE_COLOUR', type: 'bigint', default: 0 })
  @Field(() => String)
  lineColour: number | string;
}