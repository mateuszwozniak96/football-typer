import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { UsersComponent } from './users/users.component';
import { MatchesComponent } from './matches/matches.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AdminComponent } from './admin/admin.component';
import { LeagueComponent } from './league/league.component';
import { RankComponent } from './rank/rank.component';
import { QueueComponent } from './queue/queue.component';
import { LeagueFormComponent } from './league-form/league-form.component';
import { LeagueFormSuccessComponent } from './league-form-success/league-form-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LeaguesComponent,
    UsersComponent,
    MatchesComponent,
    UserProfilComponent,
    AdminComponent,
    LeagueComponent,
    RankComponent,
    QueueComponent,
    LeagueFormComponent,
    LeagueFormSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
