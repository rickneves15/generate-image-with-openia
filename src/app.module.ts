import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ControllerModule } from './Controllers/controllers.module';
import { SchemaModule } from './Schemas/schemas.module';
import { ProvidersModule } from './Providers/providers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ControllerModule,
    ProvidersModule,
    SchemaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
