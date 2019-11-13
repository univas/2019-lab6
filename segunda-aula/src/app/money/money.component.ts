import { Component, OnInit } from '@angular/core';
import { Money } from '../money';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  newMoney: Money;
  moneys: Money[];

  constructor() { }

  ngOnInit() {
    this.newMoney = new Money();
    this.moneys = [];
  }

  save() {
    this.moneys.push(this.newMoney);
    this.newMoney = new Money();
  }

}
