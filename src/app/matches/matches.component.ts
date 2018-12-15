import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any[];
  date = new Date();
  queueNumber: number;
  leagueId: number;
  activeQueue: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getMatches(1, 2021);
    this.queueNumber = 1;
    this.leagueId = 2021;
    this.activeQueue = 1;
  }


  getMatches(matchday: number, leagueId: number) {
    this.leagueId = leagueId;
    this.activeQueue = matchday;
    if (leagueId === 2021) {
      this.getMatchesFromApiEngland(matchday);
    } else if (leagueId === 2014) {
      this.getMatchesFromApiSpain(matchday);
    } else if (leagueId === 2015) {
      this.getMatchesFromApiFrance(matchday);
    } else if (leagueId === 2002) {
      this.getMatchesFromApiGermany(matchday);
    } else if (leagueId === 2001) {
      this.getMatchesFromApiCL(matchday);
    } else if (leagueId === 2019) {
      this.getMatchesFromApiItaly(matchday);
    }
  }
  getMatchesFromApiEngland(matchday: number) {
    this.httpService.getMatchesFromApiEngland(matchday).subscribe(comp => {
      this.matches = comp.matches;
    });
  }

  getMatchesFromApiSpain(matchday: number) {
    this.httpService.getMatchesFromApiSpain(matchday).subscribe(comp => {
      this.matches = comp.matches;
    });
  }

  getMatchesFromApiFrance(matchday: number) {
    this.httpService.getMatchesFromApiFrance(matchday).subscribe(comp => {
      this.matches = comp.matches;
    });
  }

  getMatchesFromApiGermany(matchday: number) {
    this.httpService.getMatchesFromApiGermany(matchday).subscribe(comp => {
      this.matches = comp.matches;
    });
  }

  getMatchesFromApiItaly(matchday: number) {
    this.httpService.getMatchesFromApiItaly(matchday).subscribe(comp => {
      this.matches = comp.matches;
    });
  }

  getMatchesFromApiCL(matchday: number) {
    this.httpService.getMatchesFromApiCL(matchday).subscribe(comp => {
      this.matches = comp.matches;
    });
  }
}
