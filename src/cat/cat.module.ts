import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CatController } from './cat.controller';
import { CatsService } from './cat.service';
import { catsProviders } from './cats.providers';

@Module({

    imports: [DatabaseModule],
    controllers: [CatController],
    providers: [CatsService, ...catsProviders]
})
export class CatModule {}
