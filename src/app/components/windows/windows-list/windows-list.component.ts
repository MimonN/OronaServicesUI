import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Window } from 'src/app/models/window.model';
import { WindowCalc } from 'src/app/models/windowCalc.model';
import { WindowsService } from 'src/app/services/windows.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-windows-list',
  templateUrl: './windows-list.component.html',
  styleUrls: ['./windows-list.component.css']
})
export class WindowsListComponent implements OnInit {
  windows: WindowCalc[] = [];
  totalPrice: number = 0;
  public isUserAuthenticated: boolean;

  constructor(private windowService: WindowsService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.windowService.getAllWindows()
    .subscribe({
      next: (windows) => {
        this.windows = windows;
      },
      error: (response) => {
        console.log(response);
      }
    });
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
  }

  addToTotalPrice(value: number){
    this.totalPrice += value;
  }
}
