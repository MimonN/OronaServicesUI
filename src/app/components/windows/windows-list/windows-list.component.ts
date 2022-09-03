import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  summary: number = 0;
  tax: number = 0;
  total: number = 0;
  public isUserAuthenticated: boolean;

  constructor(private windowService: WindowsService, private authService: AuthenticationService, private toastr: ToastrService) { }

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
    this.summary += value;
    this.tax = this.summary * 0.0875;
    this.total = this.summary + this.tax;
    this.toastr.success('Total price has been updated.','Success!');
  }
}
