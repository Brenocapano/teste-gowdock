import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "lucas"
  password: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert(`Olá ${this.email} / ${this.password}`)
  }

}
