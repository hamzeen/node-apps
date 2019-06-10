import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.form.html',
  styleUrls: ['./login.form.css']
})
export class RegisterForm {
  regsitering:boolean = false;

  signupInfo={username:'', password:'', confirmPassword:'', email:''}

  constructor(private authService: AuthService, private router: Router) {}

  public register(){
    this.regsitering = true;
    this.authService.register(this.signupInfo).subscribe((registered)=>{
      if(registered){
        this.router.navigateByUrl('/login')
      }
    });
  }
}