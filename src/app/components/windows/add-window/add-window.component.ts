import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowToCreate } from 'src/app/models/windowToCreate.model';
import { WindowsService } from 'src/app/services/windows.service';

@Component({
  selector: 'app-add-window',
  templateUrl: './add-window.component.html',
  styleUrls: ['./add-window.component.css']
})
export class AddWindowComponent implements OnInit {
  createWindowRequest: WindowToCreate = {
    windowType: undefined,
    orderNumber: undefined,
    regularPrice: undefined,
    chemicalPrice: undefined,
    postConstructionPrice: undefined
  };

  constructor(private windowService: WindowsService, private router: Router) { }

  ngOnInit(): void {
  }

  createWindow() {
    this.windowService.createWindow(this.createWindowRequest)
    .subscribe({
      next: (window) => {
        this.router.navigate(['windows']);
      }
    });
  }

}
