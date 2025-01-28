import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 't_line' })
export class Line {
  @PrimaryGeneratedColumn({ name: 'LINE_LINE', type: 'mediumint' })
  @Field(() => Int)
  lineLine: number;

  @Column({ name: 'LINE_ID', type: 'mediumint' })
  @Field(() => Int)
  lineId: number;

  @Column({ name: 'LINE_NAME', type: 'varchar', length: 30 })
  @Field()
  lineName: string;

  @Column({ name: 'LINE_SHORT', type: 'varchar', length: 10, default: 'Mxx' })
  @Field({ nullable: true })
  lineShort?: string;

  @Column({ name: 'LINE_REFNAM', type: 'varchar', length: 20 })
  @Field({ nullable: true })
  lineRefNam?: string;

  @Column({ name: 'LINE_TYPE', type: 'mediumint', default: 0 })
  @Field(() => Int, { nullable: true })
  lineType?: number;

  @Column({ name: 'LINE_STANDORT', type: 'mediumint', default: 0 })
  @Field(() => Int, { nullable: true })
  lineStandort?: number;

  @Column({ name: 'LINE_GROUP', type: 'mediumint', default: 0 })
  @Field(() => Int, { nullable: true })
  lineGroup?: number;

  @Column({ name: 'LINE_NEXT', type: 'mediumint', default: 1 })
  @Field(() => Int, { nullable: true })
  lineNext?: number;

  @Column({ name: 'LINE_NDOS', type: 'mediumint', default: 0 })
  @Field(() => Int, { nullable: true })
  lineNdos?: number;

  @Column({ name: 'LINE_COLOUR', type: 'bigint', default: 0 })
  @Field(() => Int)
  lineColour: number;

  @Column({ name: 'LINE_MINTPT', type: 'double', default: 50 })
  @Field(() => Int, { nullable: true })
  lineMinTpt?: number;

  @Column({ name: 'LINE_MAXTPT', type: 'double', default: 150 })
  @Field(() => Int, { nullable: true })
  lineMaxTpt?: number;

  @Column({ name: 'LINE_MAXABV', type: 'double', default: 100 })
  @Field(() => Int, { nullable: true })
  lineMaxAbv?: number;

  @Column({ name: 'LINE_MINWID', type: 'double', default: 800 })
  @Field(() => Int, { nullable: true })
  lineMinWid?: number;

  @Column({ name: 'LINE_MAXWID', type: 'double', default: 1800 })
  @Field(() => Int, { nullable: true })
  lineMaxWid?: number;
}
