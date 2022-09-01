import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormHomeComponent } from './contact-form-home/contact-form-home.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { ContactUsListComponent } from './contact-us-list/contact-us-list.component';
import { MatTableModule } from '@angular/material/table';
import { ContacusDetailsComponent } from './contacus-details/contacus-details.component';


@NgModule({
  declarations: [
    ContactFormHomeComponent,
    ContactUsListComponent,
    ContacusDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatTableModule
  ]
})
export class ContactFormModule { }
