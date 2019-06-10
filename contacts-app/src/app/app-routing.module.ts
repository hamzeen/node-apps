import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactEditForm } from './contact-edit.form';
import { ContactsComponent } from './contacts.component'
import { ContactComponent } from './contact.component'
import { LoginForm} from './login.form';
import { RegisterForm} from './register.form';
import { AuthGuard }  from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: ContactEditForm,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: ContactEditForm,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]    
  },
  {
    path: 'contact/:id',
    component: ContactComponent,
    canActivate: [AuthGuard]    
  }
  // {
  //   path: 'login',
  //   component: LoginForm
  // },
  // {
  //   path: 'register',
  //   component: RegisterForm
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
   
  ]
})
export class AppRoutingModule { }