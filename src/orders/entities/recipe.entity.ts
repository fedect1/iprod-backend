import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Rawmat } from './rawmap.entity';

@ObjectType()
@Entity({ name: 't_av_recipe' })
export class Recipe {
  
  @PrimaryColumn({ name: 'RECIPE_RECIPE', type: 'int', unsigned: true })
  @Field(() => Int)
  recipeId: number;

  @Column({ name: 'RECIPE_REZPNR_UNI', type: 'varchar', length: 20, nullable: true })
  @Field({ nullable: true })
  repznrUni: string;

  @Column({ name: 'RECIPE_SCHICHT', type: 'varchar', length: 4, nullable: true })
  @Field({ nullable: true })
  layer: string;

  @Column({ name: 'RECIPE_SCHICHT_ANTEIL', type: 'decimal', precision: 6, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  layerProportion: number;

  @Column({ name: 'RECIPE_REZPNR_MAT', type: 'varchar', length: 20, nullable: true })
  @Field({ nullable: true })
  repznrMat: string;

  @Column({ name: 'RECIPE_COMPONENT', type: 'tinyint', unsigned: true, nullable: true })
  @Field(() => Int, { nullable: true })
  component: number;

  @Column({ name: 'RECIPE_MATERIAL', type: 'varchar', length: 25, nullable: true })
  @Field({ nullable: true })
  material: string;

  @Column({ name: 'RECIPE_MATERIAL_ID', type: 'varchar', length: 10, nullable: true })
  @Field({ nullable: true })
  materialId: string;

  @Column({ name: 'RECIPE_DICHTE', type: 'decimal', precision: 6, scale: 3, nullable: true })
  @Field(() => Float, { nullable: true })
  density: number;

  @Column({ name: 'RECIPE_MATERIAL_ANTEIL', type: 'decimal', precision: 6, scale: 2, nullable: true })
  @Field(() => Float, { nullable: true })
  materialProportion: number;

  @Column({ name: 'RECIPE_ROHSTOFF', type: 'text', nullable: true })
  @Field({ nullable: true })
  rohstoff: string;

  /**
   * Relación con la entidad Rawmat
   */
  @ManyToOne(() => Rawmat, rawmat => rawmat.artn, { nullable: true, eager: true })
  @JoinColumn({ name: 'RECIPE_MATERIAL', referencedColumnName: 'artn' })
  @Field(() => Rawmat, { nullable: true })
  rawmat?: Rawmat;
}
