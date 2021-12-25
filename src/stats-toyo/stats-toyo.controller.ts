import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
    UseGuards,
    Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { StatsToyo } from './stats-toyo';
import { StatsToyoService } from './stats-toyo.service';
import { HttpService } from '@nestjs/axios';
import { api } from './shared/constants';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Controller('stats-toyo')
export class StatsToyoController {
    constructor(
        private statsToyoService: StatsToyoService,
        private httpService: HttpService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async updateStatsToyo(
        @Body() statsToyo: StatsToyo,
        @Request() req: any,
    ): Promise<any> {
        console.log("---------------------------------------------------------------------");
        console.table(statsToyo);
        if (Object.keys(statsToyo).length === 3) {
            if (
                'Ym9udXM' in statsToyo &&
                'dG9rZW5JZA' in statsToyo &&
                'wallet' in statsToyo
            ) {
                const { chainId, walletAddress } = req.user;
                const _chainId = statsToyo.wallet.split(';')[1];
                const _walletAddress = statsToyo.wallet.split(';')[0];

                if (
                    parseInt(chainId, 16).toString() === _chainId &&
                    walletAddress === _walletAddress
                ) {
                    try {
                        const information = {
                            Ym9udXM: statsToyo.Ym9udXM,
                            dG9rZW5JZA: statsToyo.dG9rZW5JZA,
                            wallet: statsToyo.wallet,
                        };
                        console.table(information);
                        await lastValueFrom(
                            this.httpService
                                .post(api.endpoint, JSON.stringify(information), {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                })
                                .pipe(map((response) => response.data)),
                        );
                        return new HttpException('OK', HttpStatus.OK);
                    } catch (error) {
                        throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
                    }
                } else {
                    throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
                }
            } else {
                throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
            }
        } else {
            throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
        }
    }
}
