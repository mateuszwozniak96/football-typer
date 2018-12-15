import { HttpService } from './../http.service';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { User } from '../entities';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  confirmedPassword: string;
  @Output()
  emitterRegister = new EventEmitter<boolean>();
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.user = {
      'login': '',
      'password': '',
      'email': '',
      'firstName': '',
      'lastName': ''
   };
  }

register() {
  this.httpService.addUser(this.user).subscribe();
  this.emitterRegister.emit(true);
}

}
