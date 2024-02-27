import { ParcelEntity } from './parcel.entity';
import { AppDataSource } from '../../data-source';
import { Injectable } from '@nestjs/common';
import { CreateParcel } from './model/create-parcel.dto';

const repository = AppDataSource.getRepository(ParcelEntity).extend({});

@Injectable()
export class ParcelRepository {
  async create(createParcel: CreateParcel): Promise<ParcelEntity> {
    const newParcel = new ParcelEntity();
    newParcel.sku = createParcel.sku;
    newParcel.town = createParcel.town;
    newParcel.country = createParcel.country;
    newParcel.description = createParcel.description;
    newParcel.deliveryDate = createParcel.deliveryDate;
    newParcel.streetAddress = createParcel.streetAddress;

    return repository.save(newParcel);
  }
}
