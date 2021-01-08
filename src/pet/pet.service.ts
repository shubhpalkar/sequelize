import { Inject, Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';

@Injectable()
export class PetService {
    constructor (@Inject ('Pet_Repository') private pet: typeof Pet){}

    async findAll(): Promise<Pet[]> {
        return this.pet.findAll<Pet>();
      }
}
