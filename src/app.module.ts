import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoitureModule } from './voiture/voiture.module';

@Module({
  imports: [ ConfigModule.forRoot({isGlobal:true,}), VoitureModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
