import { DynamicModule, Provider } from '@nestjs/common';
import { TYPEORM_EX_CUSTOM_REPOSITORY } from '@libs/common/database/typeorm/typeorm-ex.decorator';
import {
  getDataSourceToken,
  TypeOrmModule,
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export class TypeOrmExModule {
  public static forRoot(options?: TypeOrmModuleOptions): DynamicModule {
    return TypeOrmModule.forRoot(options);
  }

  public static forRootAsync(
    options?: TypeOrmModuleAsyncOptions,
  ): DynamicModule {
    return TypeOrmModule.forRootAsync(options);
  }
  public static forFeatures<T extends new (...args: any[]) => any>(
    repositories: T[],
  ): DynamicModule {
    const providers: Provider[] = [];

    for (const repository of repositories) {
      const entity = Reflect.getMetadata(
        TYPEORM_EX_CUSTOM_REPOSITORY,
        repository,
      );

      if (!entity) {
        continue;
      }

      providers.push({
        inject: [getDataSourceToken()],
        provide: repository,
        useFactory: (dataSource: DataSource): typeof repository => {
          const baseRepository = dataSource.getRepository<any>(entity);
          return new repository(
            baseRepository.target,
            baseRepository.manager,
            baseRepository.queryRunner,
          );
        },
      });
    }

    return {
      exports: providers,
      module: TypeOrmExModule,
      providers,
    };
  }
}
