import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { OLYMPIADS } from "../../interface/olympiads_array";

@Component({
  selector: 'app-show-olympiad',
  templateUrl: './show-olympiad.component.html',
  styleUrls: ['./show-olympiad.component.css']
})
export class ShowOlympiadComponent implements OnInit {
  @Input() id: number = 1;
  olympiads = OLYMPIADS;
  constructor() { }

  ngOnInit(): void {
  }

}
