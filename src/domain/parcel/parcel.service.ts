import { Injectable } from '@nestjs/common';
import { CreateParcel } from './model/create-parcel.dto';
import { ParcelRepository } from './parcel.repository';

@Injectable()
export class ParcelService {
  constructor(private readonly parcelRepository: ParcelRepository) {}
  async createParcel(createParcel: CreateParcel) {
    const savedParcel = await this.parcelRepository.create(createParcel);

    return savedParcel.id;
  }
}
