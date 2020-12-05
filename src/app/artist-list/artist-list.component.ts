import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
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
