import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private windowService: WindowsService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  uploadFinished = (event) => {
    this.response = event;
  }

  onCreate = (value) => {
    this.createWindowRequest = {
      windowType: value.windowType,
      orderNumber: value.orderNumber,
      regularPrice: value.regularPrice,
      chemicalPrice: value.chemicalPrice,
      postConstructionPrice: value.postConstructionPrice,
      imgPath: this.response.dbPath
    }

      this.windowService.createWindow(this.createWindowRequest)
      .subscribe({
        next: (window) => {
          this.router.navigate(['windows']);
          this.toastr.success('Your window changes has been successfully created.','Success!');
        }
      });
  }

}
