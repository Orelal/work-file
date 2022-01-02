import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  str:string="";
  data1:any;
  constructor(private flags:HttpClient) {
    flags.get("https://restcountries.com/v3.1/all").subscribe(y=>this.data1=y)
   }

  ngOnInit(): void {
  }

}
