import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {
  mobile: boolean=false;
  innerWidth: number;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    /* console.log(this.innerWidth); */
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
    /* console.log(this.innerWidth); */
  }
}
