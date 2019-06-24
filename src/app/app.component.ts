import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public innerWidth: any;
  title = 'crypto-calculator';
  mobileView = false; 
  inputValue: any;
   outputValue: any;
  objectKeys = Object.keys;
  objectValues = Object.values;
  cryptos: any;

  outputListCrypto: any;
  inputListCrypto: any;

  selectedInputValue:any;
  selectedOutputValue:any;
  selectedInputCrypto: any;
  selectedOutputCrypto: any;

  footerSelectorList = ["$ - USD", "€ - EUR", "£ - GBP"];
  constructor(private _data: DataService,
              private rd: Renderer2) {

  }
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.selectedInputCrypto = "BTC";
      this.selectedOutputCrypto = "USD";
      this.selectedInputValue = 1;
      if (this.innerWidth  < 500)
        this.mobileView = true;

      this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        this.outputListCrypto = this.objectKeys(res['BTC']);
        this.inputListCrypto = this.objectKeys(res);
        this.outputValue = res['BTC'].USD;
        this.inputValue = 1;
      });
  }
  updateValues() {

    let inputValue = this.selectedInputValue;
    let outputValueArray :any;
    let outputValue: any; 
    let priceOfOne: any;
    outputValueArray=  this.objectValues(this.cryptos[this.selectedInputCrypto]);
    
    for(let i=0 ; i < this.outputListCrypto.length; i++) {
      if(this.selectedOutputCrypto == this.outputListCrypto[i]) {
        outputValue = inputValue * outputValueArray[i];
        priceOfOne = outputValueArray[i];
      }
    }
    (<HTMLInputElement>document.getElementById("outputValue")).value = outputValue.toString();
    console.log("selected crypto input " , this.selectedInputCrypto);
    console.log("selected crypto output " , this.selectedOutputCrypto);
    console.log("1 ", this.selectedInputCrypto , "=" ,priceOfOne , this.selectedOutputCrypto);

  }
  updateInputValues() {
    let output = this.selectedOutputValue;
    let outputValueArray :any;
    let priceOfOne: any;

    outputValueArray=  this.objectValues(this.cryptos[this.selectedInputCrypto]);

    for(let i=0 ; i < this.outputListCrypto.length; i++) {
      if(this.selectedOutputCrypto == this.outputListCrypto[i]) {
        priceOfOne = outputValueArray[i];
      }
    }

    (<HTMLInputElement>document.getElementById("inputValue")).value = (this.selectedOutputValue / priceOfOne).toString();
  
    console.log("selected crypto input " , this.selectedInputCrypto);
    console.log("selected crypto output " , this.selectedOutputCrypto);
    console.log("1 ", this.selectedInputCrypto , "=" ,priceOfOne , this.selectedOutputCrypto);
    
  }
  onChangeValueInput(event) {
    this.selectedInputValue = event.srcElement.value;
    console.log("changing Value input ", this.selectedInputValue);
    this.updateValues();
  }

  onChangeValueOutput(event) {
    this.selectedOutputValue= event.srcElement.value;
    console.log("changing Value output ", this.selectedOutputValue);
    this.updateInputValues();
  }

  onChangeCryptoInput(event) {
    this.selectedInputCrypto= event.srcElement.value;
    console.log("changing crypto input ", this.selectedInputCrypto);
    this.updateValues();
  }
  onChangeCryptoOutput(event) {
    this.selectedOutputCrypto= event.srcElement.value;
    console.log("changing crypto output ", this.selectedOutputCrypto);
    this.updateValues();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth= event.target.innerWidth;
    if (this.innerWidth  < 500){
      this.mobileView = true;
    }else {
      this.mobileView = false;
    }
  }
}
