import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';
import { Contact, ContactEnum } from './Contact';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'contacts',
  templateUrl: 
                "./" + (window.screen.width > 900 ? 
                "contacts.dektop.html" :  "contacts.mobile.html"),
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent {
  contacts: Array<Contact>;
  filteredContacts: Array<Contact>;
  selectedContacts: Array<Contact>;

  constructor(
    private toasterService: ToasterService,
    private contactService: ContactService,
    private router: Router
  ){}

  ngOnInit() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contactService.findAll().subscribe(res => {
      let temp = res.map(c => new Contact(c._id, c.name, c.email, c.phone, c.category, c.imageData))
      this.contacts = temp;
      this.subscribeToSearch();
    });
  }

  subscribeToSearch() {
    this.contactService.searchObservable()
      .subscribe(txt => {
        this.filteredContacts = this.contacts.filter(a => {

          if (!txt || txt.length == 0)
            return true;

          return a.name.toLowerCase().search(txt.toLowerCase()) > -1 ||
            a.email.toLowerCase().search(txt.toLowerCase()) > -1 ||
            a.phone.toLowerCase().search(txt.toLowerCase()) > -1
        })
      });
  }

  public showContact(id: number, event: Event) {
    this.router.navigate(['/contact', id], { skipLocationChange: true });
  }

  public editContact(id: number) {
    this.router.navigate(['/edit', id], { skipLocationChange: true });
  }

  public selectContact(contact: Contact, event: Event) {
    var indexOfContact = this.contacts.findIndex(i => i.id === contact.id);
    contact.selected = !contact.selected;
    this.contacts[indexOfContact] = contact;
  }

  public deleteContact(id: number) {

    this.contactService.removeContact(id)
      .subscribe(removed => {
        if (removed) {
          this.fetchContacts();
          this.toasterService.pop('success', 'Contact Removed!', '')
        }
      })
  }



}