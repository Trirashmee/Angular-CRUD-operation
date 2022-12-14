import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MongoService } from '../mongo.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  constructor(private mongo:MongoService,private acr:ActivatedRoute) { }

  ngOnInit(): void {
    this.acr.params.subscribe((data)=>{this.emp_id=data['id']})
  }
  empform=new FormGroup({

    name:new FormControl(''),
    id:new FormControl(''),
    city:new FormControl('location.city'),
    state:new FormControl('location.state'),
    ctc:new FormControl(''),
    exp:new FormControl('')
  })

emp_id:any;
  updatemp(){
  
    this.mongo.updtemp(this.emp_id,this.empform.value).subscribe((data)=>{console.log(data)})
  }

}
