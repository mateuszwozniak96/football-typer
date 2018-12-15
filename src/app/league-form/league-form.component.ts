import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { League } from '../entities';
import { User } from '../entities';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-league-form',
  templateUrl: './league-form.component.html',
  styleUrls: ['./league-form.component.css']
})
export class LeagueFormComponent implements OnInit {

  league: League;
  user: User;

  constructor(private httpService: HttpService) {
    this.league = {
      'leagueName': ''
    };
    this.user = {
      'userId': 2,
      'login': 'Matuesz',
      'email': 'mateusz@poczta.com',
      'password': 'haslo',
      'firstName': 'matuesz',
      'lastName': 'wojda'
  };
  }

  ngOnInit() {
  }

  addLeague() {
    this.httpService.addLeague(this.league, this.user.userId).subscribe(league => {
      while (league.leagueId === null) {}
      console.log(league.leagueId);
    });
   }


}
