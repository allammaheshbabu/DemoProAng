import { Component, OnInit } from '@angular/core';
import { Sample } from './Models/Sample';
import { ISample } from './Models/ISample';
import { IEmployee } from './Models/IEmployee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'DemoProAng';
  Name:string;
  constructor(){
    this.Name="Mahesh";
  }

  ngOnInit(): void {
    // alert('component loded sucessfully....');
  }
  btn_click():void{
    // alert("button clicked successfully......")
  }

  // hflag:boolean=true;
  // bflag:boolean=false;
  // toggle():void{
  //   if(this.hflag==true){
  //     this.hflag=false;
  //   }else{
  //     this.hflag=true;
  //   }

  //   if(this.bflag==true){
  //     this.bflag=false;
  //   }else{
  //     this.bflag=true;
  //   }
  // }


  // ToggleText:string="like";
  // ToggleFlag:boolean=false;
   
  // toggling():void{
  //   if(this.ToggleFlag){
  //     this.ToggleFlag=false;
  //     this.ToggleText="Like";
  //   }
  //   else{
  //     this.ToggleFlag=true;
  //     this.ToggleText="UnLike";
  //   }
  // }



  // a:number;
  // b:number=10;
  // str:string;
  // arr: number[];
  // arr2:number[]=[1,2,3,4,5,6,7];
  // arr3:any []=[2,"abc",true]


  // obj:Sample;
  // iobj:ISample;
  
  // constructor(){
  //   this.a=10;
  //   this.str="mahesh";
  //   this.arr=[1,2,3,4,5];
  //   this.obj={a:10,b:20};
  //   this.iobj={x:25,y:35};
  // }


  // show():void{
  //   alert("this is a void method");
  // }
  //  add (x:number,y:number):number{
        
  //   return x+y;
  // }
  // operations( x:number,y:number,opt:string):number{
  //   let res:number=0;
  //        switch(opt){
  //         case "+":{res=x+y;break}
  //         case "-":{res = x-y;break;}
  //         case "*":{res= x*y;break;}
  //         case "/":{res= x/y;break;}
  //         case "%":{res=x%y;break;}
  //         default:{alert("this is default........");break;}
  //        }
  //        return res;
  // }

// empList:IEmployee[]=[
//   {empId:1001,eName:"mahesh",gender:"male",
//   password: "mahesh123",phone:"9876543221",eMail:"mahesh123@gmail.com",salary: 25000,address:"hyderabad",dob:new Date("02/22/2002"),deptNo:10},
//   {empId:1002,eName:"rajesh",gender:"male",
//   password: "rajesh123",phone:"9876543231",eMail:"rajesh123@gmail.com",salary: 27000,address:"chennai",dob:new Date("05/12/2002"),deptNo:20},
//   {empId:1003,eName:"priya",gender:"female",
//   password: "priya123",phone:"9876543241",eMail:"priya123@gmail.com",salary: 23000,address:"bangalore",dob:new Date("09/20/2002"),deptNo:30},
//   {empId:1004,eName:"kavya",gender:"female",
//   password: "kavya123",phone:"9876543281",eMail:"kavya123@gmail.com",salary: 29000,address:"vizag",dob:new Date("05/16/2002"),deptNo:40},
//   {empId:1005,eName:"raju",gender:"male",
//   password: "raju123",phone:"9876543291",eMail:"raju123@gmail.com",salary: 26000,address:"kolkata",dob:new Date("07/02/2002"),deptNo:10}
// ];
   

// name:string;
// constructor(){
//     this.name="mahesh";
//     this.name=this.name.toUpperCase();
//     this.name=this.name.toLowerCase();
// }

}


