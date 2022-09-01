import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WindowCalc } from 'src/app/models/windowCalc.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-window-card',
  templateUrl: './window-card.component.html',
  styleUrls: ['./window-card.component.css']
})
export class WindowCardComponent implements OnInit {
  @Input() window: WindowCalc;
  @Output() totalWindowTypePriceEvent = new EventEmitter<number>();
  totalWindowTypePrice: number = 0;
  isUserAuthenticated: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.setDefaultValue();

    this.isUserAuthenticated = this.authService.isUserAuthenticated();
  }

  setDefaultValue() {
    this.window.regularPriceQuantity = 0;
    this.window.chemicalPriceQuantity = 0;
    this.window.postConstructionPriceQuantity = 0;
  }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:5001/${serverPath}`;
  }
  
  addToTotal(windowPriceCalculation: NgForm){
    this.totalWindowTypePrice += (windowPriceCalculation.form.value.rpq * this.window.regularPrice) + 
      (windowPriceCalculation.form.value.cpq * this.window.chemicalPrice) + 
      (windowPriceCalculation.form.value.ppq * this.window.postConstructionPrice);
    this.totalWindowTypePriceEvent.emit(this.totalWindowTypePrice);
    this.totalWindowTypePrice = 0;
    this.window.regularPriceQuantity = 0;
    this.window.chemicalPriceQuantity = 0;
    this.window.postConstructionPriceQuantity = 0;
  }
//#region + - buttons
  plusOneR() {
    this.window.regularPriceQuantity += 1;
  }

  minusOneR(value: number) {
    if(value <= 0){
      this.window.regularPriceQuantity = 0;
    }
    else{
      this.window.regularPriceQuantity -= 1;
    }
  }

  plusOneC() {
    this.window.chemicalPriceQuantity += 1;
  }

  minusOneC(value: number) {
    if(value <= 0) {
      this.window.chemicalPriceQuantity = 0;
    }
    else {
      this.window.chemicalPriceQuantity -= 1;
    }
  }

  plusOneP() {
    this.window.postConstructionPriceQuantity += 1;
  }

  minusOneP(value: number) {
    if(value <= 0) {
      this.window.postConstructionPriceQuantity = 0;
    }
    else {
      this.window.postConstructionPriceQuantity -= 1;
    }
  }
//#endregion
}
