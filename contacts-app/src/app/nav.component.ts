import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { AuthService } from './auth.service';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-nav',
  templateUrl: "./" + (window.screen.width > 900 ? 
                "nav.desktop.html" :  "nav.mobile.html"),
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showMobileMenu = false;

  constructor(public authService: AuthService, 
    private contactService:ContactService, private router: Router) {}

  public logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
    this.toggleMobileMenu();
  }

  searchText:string;

  public filterContactsByText(){
    console.log('search text '+this.searchText);
    this.contactService.searchTextSubject.next(this.searchText);
  }

  public toggleMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }
}
