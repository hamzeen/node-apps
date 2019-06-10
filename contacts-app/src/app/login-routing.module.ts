import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from './auth-guard.service';
import { AuthService }          from './auth.service';
import { LoginForm }       from './login.form';
import { RegisterForm} from './register.form';

const loginRoutes: Routes = [
  { path: 'login', component: LoginForm },
  { path: 'register', component: RegisterForm }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}
