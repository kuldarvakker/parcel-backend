import { DataSource } from 'typeorm';
import { ParcelEntity } from './domain/parcel/parcel.entity';
import { V1Parcels1707760152473 } from '../migrations/1707760152473-V1Parcels';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5444,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [ParcelEntity],
  subscribers: [],
  migrations: [V1Parcels1707760152473],
  migrationsRun: true,
  poolSize: 10,
});

AppDataSource.initialize();
