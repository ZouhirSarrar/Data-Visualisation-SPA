import { Component, OnInit } from '@angular/core';
import { commodity } from './commodity';
import { AdunitService } from '../../adunit.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  chart = []; 

  adunits: commodity[];

  constructor(private adunitservice: AdunitService) { }

  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: commodity[]) => {
      this.adunits = data;

      let country = data.map(data => data.country);
    console.log(country);
    let annual_percent_change = data.map(data => data.annual_percent_change);

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: country,
        datasets: [
          { 
            data: annual_percent_change,
            borderColor: "#FF0000",
            backgroundColor:"#FF0000"
            
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
          text: 'House Prices Around the World'
        }
      }
    });

    });
  }
}