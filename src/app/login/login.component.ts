import { HttpService } from './../http.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  @Output()
  emiter = new  EventEmitter<boolean>();

  ngOnInit() {
  }

  login() {
    this.emiter.emit(true);
  }


}
