import { Component, OnInit } from '@angular/core';
import { ContactUs } from 'src/app/models/contactUs/contactUs.model';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us-list',
  templateUrl: './contact-us-list.component.html',
  styleUrls: ['./contact-us-list.component.css']
})
export class ContactUsListComponent implements OnInit {
  contactUsList: ContactUs[] = [];
  displayedColumns: string[] = ['name', 'state', 'createTime', 'details'];
  dataSource = this.contactUsList;
  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    this.contactUsService.getContactUs()
    .subscribe({
      next: (contactUs) => {
        this.dataSource = contactUs;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
