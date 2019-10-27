// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {ExchangeRateService} from '../services/exchange-rate.service';
import {get, param} from '@loopback/rest';

export class ExchangeRateController {
  constructor(
    @inject('services.ExchangeRate')
    private exchangeRateService: ExchangeRateService,
  ) {}
  @get('/exchangerate')
  getall() {
    return this.exchangeRateService.getdata();
  }
  @get('/exchangerate/{base}')
  getone(@param.path.string('base') base: string) {
    return this.exchangeRateService.getdata(base);
  }
}
