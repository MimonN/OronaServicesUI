import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWindowComponent } from './components/windows/add-window/add-window.component';
import { EditWindowComponent } from './components/windows/edit-window/edit-window.component';
import { WindowsListComponent } from './components/windows/windows-list/windows-list.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: 'windows', component: WindowsListComponent},
  {path: 'window/add', component: AddWindowComponent, canActivate: [AuthGuard]},
  {path: 'window/edit/:id', component: EditWindowComponent, canActivate: [AuthGuard]},
  {path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: 'contactform', loadChildren: () => import('./components/contact-form/contact-form.module').then(m => m.ContactFormModule)},
  {path: 'home', component: HomePageComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', component: HomePageComponent},
  {path: '**', component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
