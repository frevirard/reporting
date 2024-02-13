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

  typeMesure = [
    { name: "Preservation", value: 14},
    { name: "Reforestation", value: 17 },
    { name: "Ress. durable", value: 151 },
    { name: "Conservation", value: 5 },
    { name: "Autre", value: 25 },
    { name: "Aucune mesure", value: 4}
  ]

  formationPersonnel = [
    { name: "OUI", value: 14},
    { name: "NON", value: 17 },
    { name: "EN COURS", value: 151 },
    { name: "N/A", value: 5 },

  ]

  OrdreGrandeurGES = [
    { name: "Faible", value: 44},
    { name: "Modéré", value: 37 },
    { name: "Elevé", value: 151 },
    { name: "N/A", value: 8 },

  ]

  pourcentFemme = [
    { name: "Moins de 10%", value: 44},
    { name: "Entre 10% et 20%", value: 37 },
    { name: "Entre 20% et 30%", value: 151 },
    { name: "Entre 30% et 40%", value: 8 },
    { name: "Plus de 40%", value: 2 },
    { name: "N/A", value: 8 },

  ]
  constructor() { }

  ngOnInit(): void {
  }


}
