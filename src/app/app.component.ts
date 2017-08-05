import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.login()
      .subscribe(
        res => {
          console.log(res.login)
        },
        (error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            console.log("Client side Error");
          } else {
            console.log("Server Side Error")
          }
        }
      )

    this.loginService.login2()
      .subscribe(
        res => {
          console.log(res);
        }
      )
  }
}
