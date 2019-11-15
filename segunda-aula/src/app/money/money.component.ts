import { Component, OnInit } from '@angular/core';
import { Money } from '../money';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  newMoney: Money;
  moneys: Array<Array<any>>;
  chart: {};

  constructor() { }

  ngOnInit() {
    this.newMoney = new Money();
    this.moneys = [];
  }

  save() {
    let temp = [];
    temp.push(this.newMoney.date);
    temp.push(this.newMoney.value);
    this.moneys.push(temp);
    this.newMoney = new Money();
    this.generate();
  }

  generate() {
    this.chart = {
      title: 'Money',
      type: 'LineChart',
      width: 850,
      height: 450,
      data: this.moneys,
      columnNames: ['Data', 'Valor']
    };
  }

}
