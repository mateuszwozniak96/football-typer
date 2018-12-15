import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User, Match, Bet, League, Queue, Membership } from './entities';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiMatches: any[];
  membership: Membership;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('http://localhost:8080/users');
  }
  getMatches(): Observable<Array<Match>> {
    return this.http.get<Array<Match>>('http://localhost:8080/matches') ;
   }
   getBets(): Observable<Array<Bet>> {
     return this.http.get<Array<Bet>>('http://localhost:8080/bets');
   }
   getLeagues(): Observable<Array<League>> {
     return this.http.get<Array<League>>('http://localhost:8080/leagues');
   }
   getQueues(): Observable<Array<Queue>> {
     return this.http.get<Array<Queue>>('http://localhost:8080/queues');
   }
   getMemberships(): Observable<Array<Membership>> {
     return this.http.get<Array<Membership>>('http://localhost:8080/memberships');
   }
   getMembershipsByLeague(leagueId: number): Observable<Array<Membership>> {
     return this.http.get<Array<Membership>>('http://localhost:8080/leagues/' + leagueId +  '/memberships');
   }

   getMembershipsByUser(userId: number): Observable<Array<Membership>> {
     return this.http.get<Array<Membership>>('http://localhost:8080/users/' + userId + '/memberships');
   }

   addUser(user: User): Observable<User> {
     return this.http.post<User>('http://localhost:8080/users', user);
   }

   addLeague(league: League, userId: number): Observable<League> {
    return this.http.post<League>('http://localhost:8080/leagues', league);
  }

  addMembership(leagueId: number, userId: number) {
    this.membership = {
      'points': 0,
        'isAdmin': true,
        'user': {
            'userId': userId,
            'login': '',
            'email': '',
            'password': '',
            'firstName': '',
            'lastName': ''
        },
        'league': {
            'leagueId': leagueId,
            'leagueName': ''
        }
    };

    return this.http.post<Membership>('http://localhost:8080/memberships', this.membership);
  }
  getLeague(name: string): Observable<League> {
    return this.http.get<League>('http://localhost:8080/leagues?name=' + name);
   }


   getMatchesFromApi(): Observable<any> {
      return this.http.get<any>('http://api.football-data.org/v2/competitions/2019/matches', {
      headers: new HttpHeaders().set('X-Auth-Token', 'd245ad0ca70e406c9435398120ac72f4')}
      );
   }
   getMatchesFromApiItaly(matchday: number): Observable<any> {
    return this.http.get<any>('http://api.football-data.org/v2/competitions/2019/matches?matchday=' + matchday, {
    headers: new HttpHeaders().set('X-Auth-Token', 'd245ad0ca70e406c9435398120ac72f4')}
    );
 }
 getMatchesFromApiEngland(matchday: number): Observable<any> {
  return this.http.get<any>('http://api.football-data.org/v2/competitions/2021/matches?matchday=' + matchday, {
  headers: new HttpHeaders().set('X-Auth-Token', 'd245ad0ca70e406c9435398120ac72f4')}
  );
}
getMatchesFromApiSpain(matchday: number): Observable<any> {
  return this.http.get<any>('http://api.football-data.org/v2/competitions/2014/matches?matchday=' + matchday, {
  headers: new HttpHeaders().set('X-Auth-Token', 'd245ad0ca70e406c9435398120ac72f4')}
  );
}
getMatchesFromApiFrance(matchday: number): Observable<any> {
  return this.http.get<any>('http://api.football-data.org/v2/competitions/2015/matches?matchday=' + matchday, {
  headers: new HttpHeaders().set('X-Auth-Token', 'd245ad0ca70e406c9435398120ac72f4')}
  );
}
getMatchesFromApiGermany(matchday: number): Observable<any> {
  return this.http.get<any>('http://api.football-data.org/v2/competitions/2002/matches?matchday=' + matchday, {
  headers: new HttpHeaders().set('X-Auth-Token', 'd245ad0ca70e406c9435398120ac72f4')}
  );
}
getMatchesFromApiCL(matchday: number): Observable<any> {
  return this.http.get<any>('http://api.football-data.org/v2/competitions/2001/matches?matchday=' + matchday, {
  headers: new HttpHeaders().set('X-Auth-Token', 'd245ad0ca70e406c9435398120ac72f4')}
  );
}
deleteLeague(leagueId: number): Observable<League> {
  return this.http.delete<League>('http://localhost:8080/leagues/' + leagueId);
}
}
