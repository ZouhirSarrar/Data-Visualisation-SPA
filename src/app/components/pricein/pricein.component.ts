import { Component, OnInit } from '@angular/core';
import { AdunitService } from 'src/app/adunit.service';
import { commodity } from '../index/commodity';
import { Chart } from 'chart.js';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-pricein',
  templateUrl: './pricein.component.html',
  styleUrls: ['./pricein.component.css']
})
export class PriceinComponent implements OnInit {
    

  pricein: commodity[];
  chart = []; 
  adunits: commodity;
  constructor(private adunitservice: AdunitService) { }

  ngOnInit() {
    this.adunitservice
    .getAdUnits()
    .subscribe((data: commodity) => {
    this.adunits = data;
    
    let country_code_IR = data.map(data => data.country_code_IR);
    let price_to_income_ratio_index_2010_100 = data.map(data => data.price_to_income_ratio_index_2010_100);
    console.log(price_to_income_ratio_index_2010_100);

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: country_code_IR,
        datasets: [
          { 
            data: price_to_income_ratio_index_2010_100,

            borderColor: "#DCDCDC",
            fill: false
          }]
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
          text: 'House Price-to-Income Ratio around the world'
        }
      }

      
    });
    







  });


  }

}
