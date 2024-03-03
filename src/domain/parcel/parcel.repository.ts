import { ParcelEntity } from './parcel.entity';
import { AppDataSource } from '../../data-source';
import { Injectable } from '@nestjs/common';
import { CreateParcel } from './model/create-parcel.dto';
import { GetAllParcelsQuery } from './model/get-all-parcels-query.dto';

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

  async findAll(query: GetAllParcelsQuery) {
    const selectQuery = repository.createQueryBuilder('parcels').select();

    if (query.sortBy !== undefined) {
      selectQuery.addOrderBy(query.sortBy, query.sortDirection);
    }

    if (query.country !== undefined) {
      selectQuery.andWhere('parcels.country = :countryCode', {
        countryCode: query.country,
      });
    }

    if (query.description !== undefined) {
      selectQuery.andWhere('parcels.description like :description', {
        description: `%${query.description}%`,
      });
    }

    return selectQuery.getMany().then((it) =>
      it.map((e) => {
        return {
          id: e.id,
          sku: e.sku,
          town: e.town,
          country: e.country,
          description: e.description,
          deliveryDate: e.deliveryDate,
          streetAddress: e.streetAddress,
        };
      }),
    );
  }
}
