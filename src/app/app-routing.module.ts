import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWindowComponent } from './components/windows/add-window/add-window.component';
import { EditWindowComponent } from './components/windows/edit-window/edit-window.component';
import { WindowsListComponent } from './components/windows/windows-list/windows-list.component';

const routes: Routes = [
  {path: '', component: WindowsListComponent},
  {path: 'windows', component: WindowsListComponent},
  {path: 'window/add', component: AddWindowComponent},
  {path: 'window/edit/:id', component: EditWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
