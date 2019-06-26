import { Component, OnInit } from '@angular/core';
import { AdunitService } from 'src/app/adunit.service';
import { commodity } from '../index/commodity';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  credit: commodity[];
  chart = [];
  adunits: commodity;
  constructor(private adunitservice: AdunitService) { }

  ngOnInit() {
    this.adunitservice
    .getAdUnits()
    .subscribe((data: commodity) => {
    this.adunits = data;
    
    let country_C = data.map(data => data.country_C);
    let real_credit_growth_in_annual_percent_change = data.map(data => data.real_credit_growth_in_annual_percent_change);
    console.log(real_credit_growth_in_annual_percent_change);

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: country_C,
        datasets: [
          { 
            data: real_credit_growth_in_annual_percent_change,
            borderColor: "#FF0000",
            fill: false
          }
          
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        },
        title: {
          display: true,
          text: 'Real credit growth around over the past year (2018)'
        }
      }
    });
    







  });

  }
}