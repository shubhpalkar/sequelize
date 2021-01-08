import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PetController } from './pet.controller';
import { petProviders } from './pet.provider';
import { PetService } from './pet.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PetController],
  providers: [PetService, ...petProviders]

})
export class PetModule {}
