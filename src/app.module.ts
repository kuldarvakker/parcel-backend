import { Module } from '@nestjs/common';
import { ParcelModule } from './domain/parcel/parcel.module';

@Module({
  imports: [ParcelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
