import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatsToyoModule } from './stats-toyo/stats-toyo.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [StatsToyoModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
