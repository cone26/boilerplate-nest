import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import CommonDatabaseConfig from '@libs/common/database/typeorm/config/common-database.config';
@Injectable()
export class CommonTypeormConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(CommonDatabaseConfig.KEY)
    private readonly commonDatabaseConfig: ConfigType<
      typeof CommonDatabaseConfig
    >,
  ) {}

  static get database(): string {
    return CommonDatabaseConfig().name;
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      //base
      namingStrategy: this.commonDatabaseConfig.namingStrategy,
      charset: this.commonDatabaseConfig.charset,
      timezone: this.commonDatabaseConfig.timezone,
      extra: this.commonDatabaseConfig.extra,
      maxQueryExecutionTime: this.commonDatabaseConfig.maxQueryExecutionTime,
      logging: this.commonDatabaseConfig.logging,

      // connection
      type: this.commonDatabaseConfig.type,
      host: this.commonDatabaseConfig.host,
      port: this.commonDatabaseConfig.port,
      username: this.commonDatabaseConfig.username,
      password: this.commonDatabaseConfig.password,
      name: this.commonDatabaseConfig.name,
      database: this.commonDatabaseConfig.database,
      synchronize: this.commonDatabaseConfig.synchronize,
      entities: ['dist/libs/dao/src/common/**/*.entity.!(js.map){,+(ts,js)}'],
    } as TypeOrmModuleOptions;
  }
}
