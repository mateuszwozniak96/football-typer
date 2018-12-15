

export interface Bet {
  betId?: number;
  teamHomeGoals: number;
  teamAwayGoals: number;
  endDate: Date;
  match: Match;
  membership: Membership;
  }
export interface League {
  leagueId?: number;
  leagueName: string;
}
export interface Match {
  matchId?: number;
  teamHome: string;
  teamAway: string;
  teamHomeGoals: number;
  teamAwayGoals: number;
  matchDate: Date;
  queue: Queue;
}
export interface Membership {
  membershipId?: number;
  points: number;
  isAdmin: boolean;
  user: User;
  league: League;
}
export interface Queue {
  queueId?: number;
  league: League;
}
export interface User {
  userId?: number;
  login: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface ApiMatch {
  id: number;
  status: string;
  utcDate: Date;
  homeTeam: string;
  awayTeam: string;
}

