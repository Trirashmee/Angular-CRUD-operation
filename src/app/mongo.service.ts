import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private http:HttpClient) { }


  getemp(){
    return this.http.get('http://localhost:3200/empdetails')
  }

  


  addep(data:any){

    return this.http.post('http://localhost:3200/addemp',data)
  }

  delemp(id:any){
    return this.http.delete(`http://localhost:3200/delemp/${id}`)

    
  }

  updtemp(id:any,data:any){
    return this.http.put(`http://localhost:3200/updtemp/${id}`,data)
  
  }
}
