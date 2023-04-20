import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  
  addData(data:any){
    return this.http.post('http://localhost:3000/Student',data)
  }

getAllData()
{
  return this.http.get("http://localhost:3000/Student")
}

deletStudent(num:any)
{
  return this.http.delete(`http://localhost:3000/Student/${num}`)
}
editStudent(num:any,data:any)
{
  return this.http.put(`http://localhost:3000/Student/${num}`,data)
}



}
