import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts'
import dark from 'highcharts/themes/avocado'
dark(Highcharts)
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chartB = new Chart({
    chart: {
      type: 'pie',
      // backgroundColor: 'white',
      reflow: true,
      borderColor: 'purple',
      borderRadius: 20,
      shadow: {
        color: 'rgba(0, 0, 0, 0.1)',
        offsetX: 1,
        offsetY: 1,
        opacity: .1,
        width: 10
      }
    },
    plotOptions: { pie: { showInLegend: true, allowPointSelect: true } },
    title: {
      text: 'top sellers'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        type: 'pie',
        data: [{
          name: 'Kebab',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Chicken',
          y: 11.84
        }, {
          name: 'Hummus',
          y: 10.85
        }, {
          name: 'Cola',
          y: 4.67
        }, {
          name: 'Some item1',
          y: 4.18
        }, {
          name: 'Some item 2',
          y: 1.64
        }, {
          name: 'Some item 3',
          y: 1.6
        }, {
          name: 'Some item 4',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
  })

  saleData = [
    {
      "name": "Today Orders",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "Today Earning",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "Total Earnings",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "Products Sold",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    }
  ];
  chart = new Chart({
    chart: {
      type: 'line',
      // backgroundColor: 'white',
      shadow: {
        color: 'rgba(0, 0, 0, 0.1)',
        offsetX: 1,
        offsetY: 1,
        opacity: .1,
        width: 10
      },
      reflow: true,
      borderColor: 'purple',
      borderRadius: 20,
    },
    plotOptions: { pie: { showInLegend: true } },
    title: {
      text: 'top sellers'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        type: 'line',
        data: [{
          name: 'Kebab',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Chicken',
          y: 11.84
        }, {
          name: 'Hummus',
          y: 10.85
        }, {
          name: 'Cola',
          y: 4.67
        }, {
          name: 'Some item1',
          y: 4.18
        }, {
          name: 'Some item 2',
          y: 1.64
        }, {
          name: 'Some item 3',
          y: 1.6
        }, {
          name: 'Some item 4',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
    // this.chartB.removeSeries(0)
    // this.chartB.
  }
  myYAxisTickFormatting(val: any) {
    // console.log(val)
    return '$' + `${val.value}`;
  }
}
