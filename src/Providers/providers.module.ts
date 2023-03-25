import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [CloudinaryProvider],
  exports: [CloudinaryProvider],
})
export class ProvidersModule {}
