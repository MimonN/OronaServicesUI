import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormHomeComponent } from './contact-form-home/contact-form-home.component';
import { ContactUsListComponent } from './contact-us-list/contact-us-list.component';
import { ContacusDetailsComponent } from './contacus-details/contacus-details.component';

const routes: Routes = [
  {path: 'contactus-list', component: ContactUsListComponent},
  {path: 'contactus-list/details/:id', component: ContacusDetailsComponent},
  {path: '', component: ContactFormHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
