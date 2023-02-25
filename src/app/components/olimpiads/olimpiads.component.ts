import { Component, OnInit } from '@angular/core';
import { OLYMPIADS } from "../../interface/olympiads_array";
import { Olympiad } from "../../interface/olympiad";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-olimpiads',
  templateUrl: './olimpiads.component.html',
  styleUrls: ['./olimpiads.component.css']
})
export class OlimpiadsComponent implements OnInit {
  olympiads = OLYMPIADS;
  searchValue = "";
  public show_index:number = -1;

  constructor() {}


  ngOnInit(): void {
  }
}
