import { Injectable } from '@nestjs/common';
import { StatsToyo } from './stats-toyo';

@Injectable()
export class StatsToyoService {
    updateStatsToyo(statsToyo: StatsToyo) {
        return statsToyo;
    }
}
