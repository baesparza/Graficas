import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartLabels: string[] = ['Ideas', 'Sin ideas', 'Buscando Ideas'];
  public doughnutChartData: number[] = [120, 380, 500];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public random() {
      this.doughnutChartData = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
  }

}
