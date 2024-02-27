import { Module } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { ParcelRepository } from './parcel.repository';
import { ParcelController } from './parcel.controller';

@Module({
  imports: [],
  controllers: [ParcelController],
  providers: [ParcelService, ParcelRepository],
})
export class ParcelModule {}
