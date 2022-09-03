import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactUsRequest } from 'src/app/models/contactUs/contactUsRequest.model';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

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
  public isUserAuthenticated: boolean;

  constructor(private contactUsService: ContactUsService, private router: Router, private toastr: ToastrService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
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
        this.toastr.success('Thank You! Your request has been sent.','Success!');
      }
    });
    
  }

}
