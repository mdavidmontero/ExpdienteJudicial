import { Module } from '@nestjs/common';
import { JudicialService } from './judicial.service';
import { JudicialController } from './judicial.controller';

@Module({
  controllers: [JudicialController],
  providers: [JudicialService],
})
export class JudicialModule {}
