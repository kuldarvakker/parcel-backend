import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('parcels')
export class ParcelEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sku: string;

  @Column()
  description: string;

  @Column({ name: 'street_address' })
  streetAddress: string;

  @Column()
  town: string;

  @Column()
  country: string;

  @Column({ name: 'delivery_date' })
  deliveryDate: Date;

  static skuUniqueConstraint = 'c_parcels_sku_unique';
}
