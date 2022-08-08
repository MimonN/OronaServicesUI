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
  createWindowRequest: WindowToCreate;
  windowType: string;
  orderNumber: number;
  regularPrice: number;
  chemicalPrice: number;
  postConstructionPrice: number;
  response: {dbPath: ''};

  constructor(private windowService: WindowsService, private router: Router) { }

  ngOnInit(): void {
  }

  uploadFinished = (event) => {
    this.response = event;
  }

  onCreate = () => {
    this.createWindowRequest = {
      windowType: this.windowType,
      orderNumber: this.orderNumber,
      regularPrice: this.regularPrice,
      chemicalPrice: this.chemicalPrice,
      postConstructionPrice: this.postConstructionPrice,
      imgPath: this.response.dbPath
    }

      this.windowService.createWindow(this.createWindowRequest)
      .subscribe({
        next: (window) => {
          this.router.navigate(['windows']);
        }
      });
  }

}
