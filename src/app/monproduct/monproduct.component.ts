import { Component, OnInit } from '@angular/core';
import { MongoService } from '../mongo.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-monproduct',
  templateUrl: './monproduct.component.html',
  styleUrls: ['./monproduct.component.css']
})
export class MonproductComponent implements OnInit {

  constructor(private mongo:MongoService) { }

  ngOnInit(): void {
  }

  epform=new FormGroup({
    name:new FormControl(''),
    id:new FormControl(''),
    location:new FormControl(''),
    city:new FormControl('location.city'),
    state:new FormControl('location.state'),
    ctc:new FormControl(''),
    exp:new FormControl('')
  })

  


  addemp(){
    console.log(this.epform.value);
    this.mongo.addep(this.epform.value).subscribe((data)=>{console.log(data)})
  }

  
}
