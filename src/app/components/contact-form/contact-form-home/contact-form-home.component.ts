import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsRequest } from 'src/app/models/contactUs/contactUsRequest.model';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-form-home',
  templateUrl: './contact-form-home.component.html',
  styleUrls: ['./contact-form-home.component.css']
})
export class ContactFormHomeComponent implements OnInit {
  contactUsRequest: ContactUsRequest;
  name: string;
  phone: number;
  email: string;
  address: string;
  isItAHomeOrBusiness: string;
  message: string;
  howDidYouHearAboutUs: string;

  constructor(private contactUsService: ContactUsService, private router: Router) { }

  ngOnInit(): void {
  }

  onRequest = (value) => {
    this.contactUsRequest = {
      name: value.name,
      phone: value.phoneNumber,
      email: value.email,
      address: value.address,
      isItAHomeOrBusiness: value.isItAHomeOrBusiness,
      message: value.message,
      howDidYouHearAboutUs: value.howDidYouHearAboutUs
    };
    
    this.contactUsService.createContactUs(this.contactUsRequest)
    .subscribe({
      next: (_) => {
        this.router.navigate(['windows']);
      }
    });
    
  }

}
