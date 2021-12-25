import { Test, TestingModule } from '@nestjs/testing';
import { StatsToyoService } from './stats-toyo.service';

describe('StatsToyoService', () => {
  let provider: StatsToyoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatsToyoService],
    }).compile();

    provider = module.get<StatsToyoService>(StatsToyoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
