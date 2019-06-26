import { Component, OnInit } from '@angular/core';
import { AdunitService } from 'src/app/adunit.service';
import { commodity } from '../index/commodity';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-pricerent',
  templateUrl: './pricerent.component.html',
  styleUrls: ['./pricerent.component.css']
})
export class PricerentComponent implements OnInit {
  pricerent: commodity[];
  chart = []; 
  adunits: commodity;
  constructor(private adunitservice: AdunitService) { }

  ngOnInit() {
    this.adunitservice
    .getAdUnits()
    .subscribe((data: commodity) => {
    this.adunits = data;
    
    let country_code_RR = data.map(data => data.country_code_RR);
    let price_to_rent_ratio_index_2010_100 = data.map(data => data.price_to_rent_ratio_index_2010_100);
    let latest_quarter_RR = data.map(data => data.latest_quarter_RR);

    console.log(latest_quarter_RR);

    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: country_code_RR,
        datasets: [
          {
            fillColor: "rgba(34,186,160,0.2)",

            data:price_to_rent_ratio_index_2010_100 ,
          },

        ]
      },
      options: {
        legend: {
          display: true
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
          text: 'House Price-to-Rent Ratio around the world'
        }
      }
      
    });
    







  });


  }

}
