import { Injectable } from '@nestjs/common';
import { CreateParcel } from './model/create-parcel.dto';
import { ParcelRepository } from './parcel.repository';
import { Parcel } from './model/parcel.dto';
import { GetAllParcelsQuery } from './model/get-all-parcels-query.dto';

@Injectable()
export class ParcelService {
  constructor(private readonly parcelRepository: ParcelRepository) {}
  async createParcel(createParcel: CreateParcel): Promise<string> {
    const savedParcel = await this.parcelRepository.create(createParcel);

    return savedParcel.id;
  }

  async getAll(query: GetAllParcelsQuery): Promise<Parcel[]> {
    return await this.parcelRepository.findAll(query);
  }
}
