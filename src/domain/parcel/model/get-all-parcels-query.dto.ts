import { GetAllParcelsQuerySortBy } from './get-all-parcels-query-sort-by.enum';
import { IsIn, IsISO31661Alpha2, IsOptional, Length } from 'class-validator';

export class GetAllParcelsQuery {
  @IsOptional()
  @IsIn(['DELIVERY_DATE'])
  readonly sortBy: GetAllParcelsQuerySortBy | undefined;
  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  readonly sortDirection: 'ASC' | 'DESC' | undefined;
  @IsOptional()
  @IsISO31661Alpha2()
  readonly country: string | undefined;
  @IsOptional()
  @Length(3, 20)
  readonly description: string | undefined;
}
