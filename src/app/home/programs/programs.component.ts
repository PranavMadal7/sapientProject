import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import of services
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  launches = ['True', 'False'];
  data: any[] = [];
  selectLaunch: boolean = false;
  selectLand: boolean = false;
  selectYear: boolean = false;
  year: number;
  land: boolean;
  launch: boolean;
  loading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getAllPrograms()
      .subscribe(res => {
        this.data = res.map(val => {
          if (val.mission_id.length == 0) {
            val.mission_id[0] = 'NA';
          }
          if (val.rocket.first_stage.cores[0].land_success == null) {
            val.rocket.first_stage.cores[0].land_success = 'NA';
          }
          return val;
        });
        this.loading = false;
      });
  }

  // on select of year
  onSelectYear = (year) => {
    this.loading = true;
    this.year = year;
    this.selectYear = true;
    this.data = [];
    if (this.selectLand && this.selectLaunch) {
      this.filterApiCall({year: this.year}, { land: this.land }, { launch: this.launch });
    } else if (this.selectLand) {
      this.filterApiCall({year: this.year}, { land: this.land });
    } else if (this.selectLaunch) {
      this.filterApiCall({year: this.year}, { launch: this.launch });
    } else {
      this.filterApiCall({year: this.year});
    }
  }

  // on select of launch
  onSelectLaunch = (launch) => {
    this.loading = true;
    this.selectLaunch = true;
    this.launch = launch;
    this.data = [];
    if (this.selectYear && this.selectLand) {
      this.filterApiCall({year: this.year}, { land: this.land }, { launch: this.launch });
    } else if (this.selectYear) {
      this.filterApiCall({year: this.year}, { launch: this.launch });
    } else if (this.selectLand) {
      this.filterApiCall({ land: this.land }, { launch: this.launch });
    } else {
      this.filterApiCall({ launch: this.launch });
    }
  }

  // on select of landing
  onSelectLand = (land) => {
    this.loading = true;
    this.selectLand = true;
    this.land = land;
    this.data = [];
    if (this.selectYear && this.selectLaunch) {
      this.filterApiCall({year: this.year}, { land: this.land }, { launch: this.launch });
    } else if (this.selectYear) {
      this.filterApiCall({year: this.year}, { land: this.land });
    } else if (this.selectLaunch) {
      this.filterApiCall({ land: this.land }, { launch: this.launch });
    } else {
      this.filterApiCall({ land: this.land });
    }
  }

  filterApiCall = (...args) => {
    let filterValue: string = '';
    args.forEach(val => {
      let obj = val;
      if (Object.keys(obj)[0] == 'year') {
        filterValue += '&launch_year=' + val.year;
      } else if (Object.keys(obj)[0] == 'land') {
        filterValue += '&land_success=' + val.land.toLowerCase();
      } else if (Object.keys(obj)[0] == 'launch') {
        filterValue += '&launch_success=' + val.launch.toLowerCase();
      }
    });
    this.apiService.getFilterProgram(filterValue)
      .subscribe(res => {
        this.loading = false;
        this.data = res.map(val => {
          if (val.mission_id.length == 0) {
            val.mission_id[0] = 'NA';
          }
          return val;
        });
      });
  }

}
