import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Window } from 'src/app/models/window.model';
import { WindowCalc } from 'src/app/models/windowCalc.model';
import { WindowsService } from 'src/app/services/windows.service';

@Component({
  selector: 'app-windows-list',
  templateUrl: './windows-list.component.html',
  styleUrls: ['./windows-list.component.css']
})
export class WindowsListComponent implements OnInit {
  windows: WindowCalc[] = [];
  totalPrice: number = 0;

  constructor(private windowService: WindowsService) { }

  ngOnInit(): void {
    this.windowService.getAllWindows()
    .subscribe({
      next: (windows) => {
        this.windows = windows;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  addToTotalPrice(value: number){
    this.totalPrice += value;
  }
}
