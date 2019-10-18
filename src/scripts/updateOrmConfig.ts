import { ConfigService } from '../config/config.service';
import fs = require('fs');

const configService = new ConfigService(`${process.env.NODE_ENV}.env`);
fs.writeFileSync(
    'ormconfig.json',
    JSON.stringify(configService.GetPostgresTypeOrmConfig(), null, 2),
);
