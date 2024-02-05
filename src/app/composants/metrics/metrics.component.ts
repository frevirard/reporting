import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  consoEau = [
    { name: "< 1 000 m³", value: 24},
    { name: "1 000 - 5 000 m³", value: 107 },
    { name: "5 000 - 10 000 m³", value: 151 },
    { name: "> 10 000 m³", value: 5 },
    { name: "Aucune donnée", value: 4}
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
