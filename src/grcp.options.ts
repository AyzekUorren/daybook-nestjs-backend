import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microServiceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        package: 'app',
        protoPath: join(__dirname, '../src/protos/app.proto'),
    },
};
