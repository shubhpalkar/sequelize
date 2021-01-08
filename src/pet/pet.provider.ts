import { Pet } from './pet.entity';

export const petProviders = [
  {
    provide: 'Pet_Repository',
    useValue: Pet,
  },
];
