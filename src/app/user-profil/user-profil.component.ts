import { League, Membership } from './../entities';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../entities';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  user: User;
  leagues: League[];
  memberships: Membership[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getMembershipsByUser(2).subscribe(memberships => {
      this.memberships = memberships;
    });
  }

}
