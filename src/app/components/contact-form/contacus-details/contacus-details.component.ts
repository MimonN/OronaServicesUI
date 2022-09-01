import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactUs } from 'src/app/models/contactUs/contactUs.model';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contacus-details',
  templateUrl: './contacus-details.component.html',
  styleUrls: ['./contacus-details.component.css']
})
export class ContacusDetailsComponent implements OnInit {
  contactUsDetails: ContactUs = {
    id: null,
    name: '',
    phone: null,
    email: '',
    address: '',
    isItAHomeOrBusiness: '',
    message: '',
    howDidYouHearAboutUs: '',
    state: '',
    note: '',
    createTime: '',
    editTime: ''
  };
  

  constructor(private contactUsService: ContactUsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = parseInt(params.get('id'));

        if(id){
          this.contactUsService.getContactUsById(id)
          .subscribe({
            next: (response) => {
              this.contactUsDetails = response;
            }
          })
        }
      }
    })
  }

}
