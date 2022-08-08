import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WindowsListComponent } from './components/windows/windows-list/windows-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddWindowComponent } from './components/windows/add-window/add-window.component';
import { FormsModule } from '@angular/forms';
import { EditWindowComponent } from './components/windows/edit-window/edit-window.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WindowsListComponent,
    AddWindowComponent,
    EditWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
