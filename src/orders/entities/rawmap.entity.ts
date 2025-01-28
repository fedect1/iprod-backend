import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 't_rawmat' })
export class Rawmat {
  
  @PrimaryGeneratedColumn({ name: 'RAWMAT_RAWMAT', type: 'int', unsigned: true })
  @Field(() => Int)
  rawmatId: number;

  @Column({ name: 'RAWMAT_NAME', type: 'varchar', length: 45 })
  @Field()
  name: string;

  @Column({ name: 'RAWMAT_SHORT', type: 'varchar', length: 20, nullable: true })
  @Field({ nullable: true })
  short?: string;

  @Column({ name: 'RAWMAT_RAWTYP', type: 'int', unsigned: true, nullable: true })
  @Field(() => Int, { nullable: true })
  rawtyp?: number;

  @Column({ name: 'RAWMAT_PRODUCER', type: 'int', unsigned: true, nullable: true })
  @Field(() => Int, { nullable: true })
  producer?: number;

  @Column({ name: 'RAWMAT_DENSITY', type: 'double', nullable: true })
  @Field(() => Float, { nullable: true })
  density?: number;

  @Column({ name: 'RAWMAT_BULKDENS', type: 'double', nullable: true })
  @Field(() => Float, { nullable: true })
  bulkDensity?: number;

  @Column({ name: 'RAWMAT_MFIVAL', type: 'double', nullable: true })
  @Field(() => Float, { nullable: true })
  mfival?: number;

  @Column({ name: 'RAWMAT_COLOR', type: 'bigint', unsigned: true, nullable: true })
  @Field(() => Int, { nullable: true })
  color?: number;

  @Column({ name: 'RAWMAT_VIPIDX', type: 'int', unsigned: true, nullable: true })
  @Field(() => Int, { nullable: true })
  vipIdx?: number;

  @Column({ name: 'RAWMAT_ARTN', type: 'varchar', length: 45, unique: true, nullable: true })
  @Field({ nullable: true })
  artn: string;

  @Column({ name: 'RAWMAT_NOVIP', type: 'tinyint', width: 1, default: 0 })
  @Field(() => Boolean)
  noVip: boolean;
}
