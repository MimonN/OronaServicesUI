import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactUs } from '../models/contactUs/contactUs.model';
import { ContactUsRequest } from '../models/contactUs/contactUsRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getContactUs() {
    return this.http.get<ContactUs[]>(this.baseApiUrl + '/api/contactus/getallcontactus');
  }

  getContactUsById(id: number) {
    return this.http.get<ContactUs>(this.baseApiUrl + '/api/contactus/getcontactus/' + id);
  }

  createContactUs(createContactUsRequest: ContactUsRequest) {
    return this.http.post<ContactUsRequest>(this.baseApiUrl + '/api/contactus/createcontactus', createContactUsRequest);
  }
}
