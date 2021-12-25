import { Test, TestingModule } from '@nestjs/testing';
import { StatsToyoController } from './stats-toyo.controller';

describe('StatsToyoController', () => {
    let controller: StatsToyoController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [StatsToyoController],
        }).compile();

        controller = module.get<StatsToyoController>(StatsToyoController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
