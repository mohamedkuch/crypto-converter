import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';
@Injectable()
export class DataService {

  result:any;

  constructor(private _http: HttpClient) { }

  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?' +
    'fsyms=BTC,ETH,DASH,LTC,XRP,BCH,ETC,XMR,EOS&tsyms=USD,EUR,GBP&api_key=4905f546a9bece7b79573117dc421947384b4ec0a2b3ef6fadfbd2a4376161aa')
        .pipe(
            map((result) =>  this.result = result)
        );
  }

}
