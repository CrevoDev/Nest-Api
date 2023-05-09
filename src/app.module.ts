import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from '../config/configuration';
import { AuthGuard } from './guards/auth.guard';
import { UsersModule } from './controllers/users/users.module';
import { AuthModule } from './controllers/auth/auth.module';
import { ClientsModule } from './controllers/clients/clients.module';
import { ProductsModule } from './controllers/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '*.env',
      load: [configuration],
      isGlobal: true
    }),
    MongooseModule.forRoot(configuration().database),
    UsersModule,
    AuthModule,
    ClientsModule,
    ProductsModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule {}
