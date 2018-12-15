import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { League } from '../entities';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues: Array<League>;
  constructor(private httpService: HttpService) {
    this.getLeagues();
   }

  ngOnInit() {}

  getLeagues() {
    this.httpService.getLeagues().subscribe(leagues => {
      this.leagues = leagues;
    });
  }
  delete(leagueId: number) {
    this.httpService.deleteLeague(leagueId).subscribe();
    window.location.reload();
  }

}
