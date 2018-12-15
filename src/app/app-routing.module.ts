import { LeagueFormComponent } from './league-form/league-form.component';
import { LeagueComponent } from './league/league.component';
import { League } from './entities';
import { MatchesComponent } from './matches/matches.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { LeagueFormSuccessComponent } from './league-form-success/league-form-success.component';

const routes: Routes = [
  {
    path: 'profile',
    component: UserProfilComponent
    },
    {
      path: 'league-form',
      component: LeagueFormComponent
    },
    {
      path: 'league-form-success',
      component: LeagueFormSuccessComponent
    },
    {
      path: 'leagues',
      component: LeaguesComponent
    },
    {
      path: 'league',
      component: LeagueComponent
    },
    {
      path: 'matches',
      component: MatchesComponent
    },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'leagues',
        component: LeaguesComponent
      },
      {
        path: '',
        component: UsersComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
