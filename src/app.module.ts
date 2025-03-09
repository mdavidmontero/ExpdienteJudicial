import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JudicialModule } from './judicial/judicial.module';

@Module({
  imports: [JudicialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
