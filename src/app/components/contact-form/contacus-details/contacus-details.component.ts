import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactUs } from 'src/app/models/contactUs/contactUs.model';
import { ContactUsUpdate } from 'src/app/models/contactUs/contactUsUpdate.model';
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
  

  constructor(private contactUsService: ContactUsService, private route: ActivatedRoute, private toastr: ToastrService,
    private router: Router) { }

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

  refresh(): void {
    window.location.reload();
}

  updateContactUs() {
    this.contactUsService.updateContactUs(this.contactUsDetails.id, this.contactUsDetails).subscribe({
      next: (response) => {
        this.refresh();
        this.toastr.success('ContactUs form has been updated.','Success!');
      }
    });
  }

}
