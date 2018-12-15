import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../entities';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
