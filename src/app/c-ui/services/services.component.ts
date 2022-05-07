import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


id:any = "service1";
tabChange(ids:any){
 this.id = ids;
}







}
