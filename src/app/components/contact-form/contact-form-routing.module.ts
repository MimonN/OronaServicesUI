import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { ContactFormHomeComponent } from './contact-form-home/contact-form-home.component';
import { ContactUsListComponent } from './contact-us-list/contact-us-list.component';
import { ContacusDetailsComponent } from './contacus-details/contacus-details.component';

const routes: Routes = [
  {path: 'contactus-list', component: ContactUsListComponent, canActivate: [AuthGuard]},
  {path: 'contactus-list/details/:id', component: ContacusDetailsComponent, canActivate: [AuthGuard]},
  {path: '', component: ContactFormHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
