import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public handleHome(): void {
    this.router.navigate(['/']);
  }

  public handleAbout(): void {
    this.router.navigate(['/about'])
  }

  public handleEvent(): void {
    this.router.navigate(['/events'])
  }
}
