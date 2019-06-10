import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { ContactEditForm } from './contact-edit.form';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';
import { LoginForm} from './login.form';
import { RegisterForm} from './register.form';
import { AppRoutingModule } from './app-routing.module';
import { ToasterModule } from 'angular2-toaster';
import { LoginRoutingModule } from './login-routing.module';
import { ContactService } from './contact.service';
import { ImageCropperModule } from 'ng2-img-cropper';
import { LoadersCssModule } from 'angular2-loaders-css';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactEditForm,
    ContactsComponent,
    ContactComponent,
    LoginForm,
    RegisterForm,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToasterModule,
    LoginRoutingModule,
    LoadersCssModule,
    ImageCropperModule
  ],
  providers: [ ContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
