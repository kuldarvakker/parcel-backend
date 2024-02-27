import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ParcelService } from './parcel.service';
import { CreateParcel } from './model/create-parcel.dto';
import { QueryFailedError } from 'typeorm';
import { DriverError } from '../../common/driver-error.dto';
import { POSTGRES_ERROR_CODES } from '../../app.contants';
import { ParcelEntity } from './parcel.entity';

@Controller('api/v1/parcels')
export class ParcelController {
  constructor(private readonly parcelService: ParcelService) {}

  @Post()
  async createParcel(@Body() createParcel: CreateParcel) {
    try {
      const parcelId = await this.parcelService.createParcel(createParcel);

      return { id: parcelId };
    } catch (err) {
      if (err instanceof QueryFailedError) {
        const queryFailedError = err as QueryFailedError<DriverError>;
        const errorCode = queryFailedError.driverError.code;
        const constraint = queryFailedError.driverError.constraint;

        if (
          POSTGRES_ERROR_CODES.uniqueViolation === errorCode &&
          ParcelEntity.skuUniqueConstraint === constraint
        ) {
          throw new BadRequestException({
            message: 'Parcel with the same sku value already exists',
          });
        }
      }
    }
  }
}
