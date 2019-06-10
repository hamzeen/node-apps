import { Component, ViewChild } from '@angular/core';
import { Contact, ContactEnum } from './Contact';
import { ContactService } from './contact.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';

@Component({
  selector: 'contact',
  templateUrl: './contact-edit.form.html',
  styleUrls: ['contact-edit.form.css']
})
export class ContactEditForm {
  contact:Contact;
  categories = ContactEnum;
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

  cropperSettings:CropperSettings;
  data:any = {};

  constructor(
    private toasterService : ToasterService,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ){

    this.cropperSettings = new CropperSettings();
      this.cropperSettings.width = 200;
      this.cropperSettings.height = 200;

      this.cropperSettings.croppedWidth = 200;
      this.cropperSettings.croppedHeight = 200;

      this.cropperSettings.canvasWidth = 200;
      this.cropperSettings.canvasHeight = 200;

      this.cropperSettings.minWidth = 10;
      this.cropperSettings.minHeight = 10;

      this.cropperSettings.rounded = false;
      this.cropperSettings.keepAspect = false;

      this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
      this.cropperSettings.cropperDrawSettings.strokeWidth = 2;
      this.cropperSettings.noFileInput = true;
      this.data = {};

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       let id = params['id'];
       if(id){
        this.contactService.findById(id)
        .subscribe(c=>{
          this.contact=new Contact(c._id,c.name,c.email,c.phone,c.category,c.imageData);
          this.data.image = c.imageData;
          });
       }else{
           this.contact = new Contact();
       }
       
    });
  }

  cropped(){
    this.contact.imageData = this.data.image;
  }

  fileChangeListener($event) {
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }

  saveContact(valid){
    if(!valid)
      return;
    if(this.contact.id!=null){
        this.contactService.saveContact(this.contact)
        .subscribe(c=>{
            this.contact =new Contact(c._id,c.name,c.email,c.phone,c.category,c.imageData);
            this.toasterService.pop('success', 'Contact Updated!', '');
        })
    }else{
        this.contactService.createContact(this.contact)
        .subscribe(c=>{
            this.contact =new Contact(c._id,c.name,c.email,c.phone,c.category,c.imageData);
            this.toasterService.pop('success', 'Contact Saved!', '');
        })
    }
  }


}