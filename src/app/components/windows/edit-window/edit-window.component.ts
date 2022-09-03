import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Window } from 'src/app/models/window.model';
import { WindowsService } from 'src/app/services/windows.service';

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.css']
})
export class EditWindowComponent implements OnInit {
  windowDetails: Window;
  response: {dbPath: ''};
  modalRef?: BsModalRef;
  message?: string;
  
  constructor(private route: ActivatedRoute, private windowsService: WindowsService, private router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = parseInt(params.get('id'));
        
        if(id){
          this.windowsService.getWindow(id)
          .subscribe({
            next: (response) => {
              this.windowDetails = response;
            }
          })
        }
      }
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }
 
  confirm(id: number): void {
    this.message = 'Confirmed!';
    this.deleteWindow(id);
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  uploadFinished = (event) => {
    this.response = event;
  }

    updateWindow() {
      if(this.response != null) {
        this.windowDetails.imgPath = this.response.dbPath;
      }
    
    this.windowsService.updateWindow(this.windowDetails.id, this.windowDetails).subscribe({
      next: (response) => {
        this.router.navigate(['windows']);
      }
    });
  }

  deleteWindow(id: number) {
    this.windowsService.deleteWindow(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['windows']);
      }
    })
  }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:5001/${serverPath}`; 
  }

}
