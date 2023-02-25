import { Component, OnInit } from '@angular/core';
import { Self } from "../../interface/personal_information";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  self = Self;
  constructor() { }

  ngOnInit(): void {
  }

}
