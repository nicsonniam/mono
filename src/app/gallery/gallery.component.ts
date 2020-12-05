import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  innerWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }
}
