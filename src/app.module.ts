import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DatabaseModule } from './database/database.module';
import { PetModule } from './pet/pet.module';


@Module({
  imports: [DatabaseModule, CatModule, PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
