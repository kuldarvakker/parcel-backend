import { MigrationInterface, QueryRunner } from 'typeorm';

export class V1Parcels1707760152473 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
          CREATE TABLE parcels
          (
              id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
              sku            TEXT        NOT NULL,
              description    TEXT        NOT NULL,
              street_address TEXT        NOT NULL,
              town           TEXT        NOT NULL,
              country        TEXT        NOT NULL,
              delivery_date  TIMESTAMPTZ NOT NULL
          );

          ALTER TABLE parcels
              ADD CONSTRAINT c_parcels_sku_unique UNIQUE (sku);
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE parcels`);
  }
}
