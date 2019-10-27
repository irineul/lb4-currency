// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {ExchangeRateService} from '../services/exchange-rate.service';
import {get, param} from '@loopback/rest';

export class ExchangeRateController {
  constructor(
    @inject('services.ExchangeRate')
    private exchangeRateService: ExchangeRateService,
  ) {}
  @get('/exchange-rate')
  getall() {
    return this.exchangeRateService.getdata();
  }
  @get('/exchange-rate/{base}')
  get(@param.path.string('base') base: string) {
    return this.exchangeRateService.getdata(base);
  }
}
