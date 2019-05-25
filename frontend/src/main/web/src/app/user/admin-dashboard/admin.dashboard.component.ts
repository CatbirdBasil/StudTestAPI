import {AfterContentInit, Component, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {DashboardService} from "@services/dashboard.service";
import {
  AdminDashboard,
  CostsPerInterval,
  CountryTrips,
  ServicesDistribution,
  TroubleTicketStatistic,
  UsersPerYear
} from "@models/admin.dashboard";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin.dashboard.component.html',
  styleUrls: ['./admin.dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentInit {

  //BAR CHART
  public bar: string = 'bar';
  public barDatasets: Array<any>;
  public barLabels: Array<any>;
  public barColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public barOptions: any = {
    responsive: true
  };
  //----------------

  //DOUGHNUT CHART
  public doughnut: string = 'doughnut';
  public doughnutDatasets: Array<any>;
  public doughnutLabels: Array<any>;
  public doughnutColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  public doughnutOptions: any = {
    responsive: true
  };
  //----------------

  //LINE CHART
  public line: string = 'line';
  public lineDatasets: Array<any>;
  public lineLabels: Array<any>;
  public lineColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];
  public lineOptions: any = {
    responsive: true
  };
  //----------------

  //HORIZONTAL CHART
  public horizontal: string = 'horizontalBar';
  public horizontalDatasets: Array<any>;
  public horizontalLabels: Array<any>;
  public horizontalColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public horizontalOptions: any = {
    responsive: true
  };
  //----------------

  //PIE CHART
  public pie: string = 'pie';
  public pieDatasets: Array<any>;
  public pieLabels: Array<any>;
  public pieColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  public pieOptions: any = {
    responsive: true
  };
  //----------------

  years: string[];
  userNumbers: number[];

  serviceTypes: string[];
  distAmount: number[];

  countryNames: string[];
  amount: number[];

  yearsC: string[];
  carrierNumbers: number[];

  interval: string[];
  cost: number[];

  state: string[];
  ttAmount: number[];

  private adminDashboards: AdminDashboard = {
    usersPerYear: [],
    servicesDistribution: [],
    countryTrips: [],
    carriersPerYear: [],
    costsPerInterval: [],
    troubleTicketStatistic: []
  };

  constructor(private http: HttpClient,
              private dashboardService: DashboardService) {
    this.years = [];
    this.userNumbers = [];
    this.serviceTypes = [];
    this.distAmount = [];
    this.countryNames = [];
    this.amount = [];
    this.yearsC = [];
    this.carrierNumbers = [];
    this.interval = [];
    this.cost = [];
    this.state = [];
    this.ttAmount = [];
  }

  ngOnInit() {
    this.dashboardService.getAdminDashboard().subscribe(
      data => {
        if (data) {

          this.adminDashboards = data;
          this.adminDashboards.usersPerYear.forEach((element: UsersPerYear) => {
            this.years.push(element.year);
            this.userNumbers.push(element.usersAmount);
          });
          //mock for presentation
          this.years.push('2020');
          this.userNumbers.push(150);
          //--------------------
          this.userNumbers.push(0);

          this.adminDashboards.servicesDistribution.forEach((element: ServicesDistribution) => {
            this.serviceTypes.push(element.serviceType);
            this.distAmount.push(element.distAmount);
          });

          this.adminDashboards.countryTrips.forEach((element: CountryTrips) => {
            this.countryNames.push(element.countryName);
            this.amount.push(element.amount);
          });
          this.amount.push(0);

          this.adminDashboards.carriersPerYear.forEach((element: UsersPerYear) => {
            this.yearsC.push(element.year);
            this.carrierNumbers.push(element.usersAmount);
          });
          //mock for presentation
          this.yearsC.push('2020');
          this.carrierNumbers.push(30);
          //--------------------

          this.adminDashboards.costsPerInterval.forEach((element: CostsPerInterval) => {
            this.interval.push(element.interval);
            this.cost.push(element.cost);
          });

          this.adminDashboards.troubleTicketStatistic.forEach((element: TroubleTicketStatistic) => {
            this.state.push(element.state);
            this.ttAmount.push(element.amount);
          });
          this.ttAmount.push(0);
        }
      }, err => {
        alert(err);
      })
  }

  ngAfterContentInit() {
    this.barDatasets = [
      {data: this.ttAmount, label: 'Trouble tickets stat'}
    ];
    this.barLabels = this.state;

    this.doughnutDatasets = [
      {data: this.distAmount, label: 'Service amount'}
    ];
    this.doughnutLabels = this.serviceTypes;

    this.lineDatasets = [
      {data: this.carrierNumbers, label: 'Carriers amount'},
      {data: this.userNumbers, label: 'Users amount'}
    ];
    this.lineLabels = this.yearsC;

    this.horizontalDatasets = [
      {data: this.amount, label: 'Trips amount'}
    ];
    this.horizontalLabels = this.countryNames;

    this.pieDatasets = [
      {data: this.cost, label: 'Cost'}
    ];
    this.pieLabels = this.interval;
  }
}
