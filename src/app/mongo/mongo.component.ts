import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { MongoService } from '../mongo.service';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.css']
})
export class MongoComponent implements OnInit {

  constructor(private mongo:MongoService,private route:Router) { }

  ngOnInit(): void {

    this.getdata()
    // this.getemp()
  }
  // mdblist:any;
  getdata()
  {
    this.mongo.getemp().subscribe(
      (data)=>{this.emplist=data}
    )
  }
emplist:any;
//   getemp(){
//     this.mongo.getemp().subscribe((data)=>{this.emplist=data})

//   }

  delempid(id:any)
  {
   return this.mongo.delemp(id).subscribe((data)=>{console.log(data)})

  }
updtempid(id:any)
{
  this.route.navigate(['/updateemp',id])
  // return this.mongo.updtemp(id).subscribe((data)=>{console.log(data)})

}
}
