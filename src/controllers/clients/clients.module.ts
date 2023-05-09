import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from '../../schemas/client.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Client.name,
        useFactory: () => {
          const schema = ClientSchema
          schema.pre('save', async function (next: Function) {
            next()
          })
          return schema
        }
      }
    ])
  ],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
