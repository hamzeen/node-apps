import { Component } from '@angular/core';
import { Contact, ContactEnum } from './Contact';
import { ContactService } from './contact.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent {
  contact: Contact;
  contactEnum = ContactEnum;
  
  constructor(
    private toasterService: ToasterService,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      return this.contactService.findById(id).subscribe(c => 
        this.contact = new Contact(c._id,c.name,c.email,c.phone,c.category,c.imageData)
      );
    });
  }

  public editContact() {
    this.router.navigate(['/edit', this.contact.id], { skipLocationChange: true });
  }

  public deleteContact() {
    
    this.contactService.removeContact(this.contact.id)
      .subscribe(removed => {
        console.log('removing '+removed)
        if (removed) {
          this.toasterService.pop('success', 'Contact Removed!', '')
          this.router.navigateByUrl('/')
        }
      })
  }
}