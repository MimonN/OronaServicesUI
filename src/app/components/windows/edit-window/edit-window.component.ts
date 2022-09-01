import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private windowsService: WindowsService, private router: Router) { }

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
