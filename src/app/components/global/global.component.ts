import { Component, OnInit } from '@angular/core';
import { AdunitService } from 'src/app/adunit.service';
import { commodity } from '../index/commodity';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  global: commodity[];
  chart = []; 
  adunits: commodity;
  constructor(private adunitservice: AdunitService) { }

  ngOnInit() {
    this.adunitservice
    .getAdUnits()
    .subscribe((data: commodity) => {
    this.adunits = data;
    
    let dateq = data.map(data => data.dateq);
    let equally_weighted = data.map(data => data.equally_weighted);
    console.log(equally_weighted);

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dateq,
        datasets: [
          { 
            data: equally_weighted,
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
          text: 'Global House Price Index'
        }
      }
    });







  });


  }

}

