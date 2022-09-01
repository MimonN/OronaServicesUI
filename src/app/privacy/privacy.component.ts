import { Component, OnInit } from '@angular/core';
import { WindowsService } from '../services/windows.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  public claims: [] = [];

  constructor(private windows: WindowsService) { }

  ngOnInit(): void {
    this.getClaims();
  }

  public getClaims = () => {
    this.windows.getClaims('/api/window/privacy')
    .subscribe(res => {
      this.claims = res as [];
    })
  }

}
