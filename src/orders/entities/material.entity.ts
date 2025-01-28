import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity({ name: 't_rawmat' })
export class Material {
  @PrimaryColumn({ name: 'RAWMAT_RAWMAT', type: 'int' })
  @Field(() => Int)
  rawmatKey: number;

  @Column({ name: 'RAWMAT_NAME', type: 'varchar', nullable: true })
  @Field({ nullable: true })
  rawmatName: string;

  @Column({ name: 'RAWMAT_SHORT', type: 'varchar', nullable: true })
  @Field({ nullable: true })
  rawmatShort: string;

  @Column({ name: 'RAWMAT_RAWTYP', type: 'int', unsigned: true, nullable: true })
  @Field(() => Int, { nullable: true })
  rawmatTyp?: number;

  @Column({ name: 'RAWMAT_PRODUCER', type: 'int', nullable: true })
  @Field(() => Int, { nullable: true })
  rawmatProducer: number;

  @Column({ name: 'RAWMAT_DENSITY', type: 'decimal', precision: 4, scale: 3, nullable: true })
  @Field(() => Float, { nullable: true })
  rawmatDensity: number;

  @Column({ name: 'RAWMAT_BULKDENS', type: 'int', nullable: true })
  @Field(() => Int, { nullable: true })
  rawmatBulkdens: number;

  @Column({ name: 'RAWMAT_MFIVAL', type: 'double', nullable: true })
  @Field(() => Float, { nullable: true })
  rawmatMFinal?: number;

  @Column({ name: 'RAWMAT_COLOR', type: 'int', nullable: true })
  @Field(() => Int, { nullable: true })
  rawmatColor: number;

  @Column({ name: 'RAWMAT_ARTN', type: 'varchar', length: 45, unique: true, nullable: true })
  @Field({ nullable: true })
  rawmatArtn: string;
}
