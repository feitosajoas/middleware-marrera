import { Module } from '@nestjs/common';
import { ConstrollersModule } from './controllers/constrollers.module';

@Module({
  imports: [ConstrollersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
