import { Injectable } from '@nestjs/common';
import { CreateParcel } from './model/create-parcel.dto';
import { ParcelRepository } from './parcel.repository';
import { Parcel } from './model/parcel.dto';

@Injectable()
export class ParcelService {
  constructor(private readonly parcelRepository: ParcelRepository) {}
  async createParcel(createParcel: CreateParcel): Promise<string> {
    const savedParcel = await this.parcelRepository.create(createParcel);

    return savedParcel.id;
  }

  async getAll(): Promise<Parcel[]> {
    return await this.parcelRepository.findAll();
  }
}
