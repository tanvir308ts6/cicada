import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 //this is a variable that hold number
 projectcount:number = -200;
 //same process
 accuratecount:number = 0;
 clientcount:number = -100;
 customerfeedback:number = 0;

 //we have created setinterval function with arrow function and
 //and set them in a variable that is projectcountstop.
 projectcountstop:any = setInterval(()=>{
   this.projectcount++;
   //we need to stop this at  particular point; will use if condition
   if(this.projectcount ==87)
   {
     //clearinterval will stop tha function
     clearInterval(this.projectcountstop);
   }

 },10) //10 is milisecond you can control it


 accuratecountstop:any = setInterval(()=>{
   this.accuratecount++;
   if(this.accuratecount == 95)
   {

     clearInterval(this.accuratecountstop);
   }
 },10)


 clientcountstop:any = setInterval(()=>{
   this.clientcount++;
   if(this.clientcount == 150)
   {

     clearInterval(this.clientcountstop);

   }
 },10)

 customerfeedbackstop:any = setInterval(()=>{
   this.customerfeedback++;
   if(this.customerfeedback == 92)
   {

     clearInterval(this.customerfeedbackstop);
   }
 },10)

 //conclusion: we have use
 //string interpolation
 //setInterval function
 //()=> arrow function
 //clearInterval
 //creating variable

  constructor() { }

  ngOnInit(): void {


  }

}
