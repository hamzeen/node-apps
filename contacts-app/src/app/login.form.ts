import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css']
})
export class LoginForm {
  loggingIn : boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  loginInfo = {username:'', password:''}

  public login(){
    this.loggingIn = true;
    this.authService.authenticate(this.loginInfo).subscribe((loggedIn)=>{
      if(loggedIn){
        this.router.navigateByUrl('/')
      }
    });
  }
}