import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms'; 
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-curd-mat',
  templateUrl: './curd-mat.component.html',
  styleUrls: ['./curd-mat.component.css']
})
export class CurdMatComponent {
  constructor(private fb:FormBuilder,private server:ServiceService)
  {

  }

  ngOnInit() {
    
  }

  studentData=this.fb.group({
    name:new FormControl('',[Validators.required]),
    adress:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    education:new FormControl('',[Validators.required]),
    phoneNo:new FormControl('',[Validators.required])
  })

  allArray:any=[];

sendData()
{
  
this.server.addData(this.studentData.value).subscribe(res=>
  {
    console.log(res);
    location.reload();
  })
}


getAll()
{
  this.server.getAllData().subscribe(res=>{
this.allArray=res;

  })
}





}
