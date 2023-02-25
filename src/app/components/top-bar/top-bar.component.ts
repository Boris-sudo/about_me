import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public state: string = "about me";

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  go(value: string): void {
    this.state = value;
    if (value == 'about me')
      this.router.navigate([""]);
    else this.router.navigate([value]);
  }
}
