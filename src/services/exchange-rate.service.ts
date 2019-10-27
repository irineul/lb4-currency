import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {ExchangerateDataSource} from '../datasources';

export interface ExchangeRate {
  rates: [];
  base: string;
  date: string;
}

export interface ExchangeRateService {
  getdata(base?: string): Promise<ExchangeRate>;
}
export class ExchangeRateProvider implements Provider<ExchangeRateService> {
  constructor(
    // exchangerate must match the name property in the datasource json file
    @inject('datasources.exchangerate')
    protected dataSource: ExchangerateDataSource = new ExchangerateDataSource(),
  ) {}

  value(): Promise<ExchangeRateService> {
    return getService(this.dataSource);
  }
}
