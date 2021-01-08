import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cat/cat.entity';
import { Pet} from '../pet/pet.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'newdb',
      });

      sequelize.databaseVersion().then((databaseVersion) => {
        console.log(databaseVersion);
    } );
      
      sequelize.addModels(['Cat', 'Pet']);
      await sequelize.sync();
      return sequelize;
    },
  },
];

