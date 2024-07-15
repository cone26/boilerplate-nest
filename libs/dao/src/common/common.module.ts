import { Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import { CommonTypeormConfigService } from './config/common-typeorm-config.service';

@Module({
  imports: [
    TypeOrmExModule.forRootAsync({
      name: CommonTypeormConfigService.database,
      useClass: CommonTypeormConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),

    /**
     * data module
     */
  ],
})
export class CommonModule {}
