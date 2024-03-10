import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements AfterViewInit {
  BarChartArray: any[] = [];
  name: string = '';
  quatity: Number = 0;

  constructor(private http: HttpClient) {
    this.getdata();
  }

  @ViewChild('myBarChart', { static: false }) myBarChart!: ElementRef;

  ngAfterViewInit() {
    this.createBarChart();
  }

  getdata() {}
  private createBarChart() {
    if (!this.myBarChart || !this.myBarChart.nativeElement) {
      console.error('Error: Unable to find the canvas element.');
      return;
    }

    const ctx = this.myBarChart.nativeElement.getContext('2d');

    const data = {
      labels: [
        'Computer System',
        'Computer Science',
        'Data Scientist',
        'AI engineer',
      ],
      datasets: [
        {
          label: 'BAR CHART',
          data: [10, 20, 15, 25],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(git255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }
}
