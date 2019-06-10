import { Component, ViewEncapsulation } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: [
              './app.component.css',
              '../../node_modules/bulma/css/bulma.css',
              '../../node_modules/font-awesome/css/font-awesome.min.css',
              '../../node_modules/angular2-toaster/toaster.css',
              '../../node_modules/loaders.css/loaders.min.css'
            ]
})
export class AppComponent {
  public toasterconfig : ToasterConfig = 
    new ToasterConfig({animation: 'flyDown'});

}