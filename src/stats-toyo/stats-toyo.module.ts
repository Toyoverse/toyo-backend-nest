import { Module } from '@nestjs/common';
import { StatsToyoController } from './stats-toyo.controller';
import { StatsToyoService } from './stats-toyo.service';
import { HttpModule } from '@nestjs/axios';


@Module({
    imports: [HttpModule],
    controllers: [StatsToyoController],
    providers: [StatsToyoService],
})
export class StatsToyoModule {}
