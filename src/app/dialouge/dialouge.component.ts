import { Component, Inject } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../service.service';
export interface DialogData {
  id:any, 
  name:any,
   adress:any,
   email:any,
   education:any,
   phoneNo:any
  
 }
@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']
})

export class DialougeComponent {
  // data2:any
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data: DialogData,private server:ServiceService)
  {
this.studentData.controls['name'].setValue(data.name),
this.studentData.controls['adress'].setValue(data.adress),
this.studentData.controls['email'].setValue(data.email),
this.studentData.controls['education'].setValue(data.education),
this.studentData.controls['phoneNo'].setValue(data.phoneNo);
console.log(data.id)


     
  }

  studentData=this.fb.group({
    name:new FormControl('',[Validators.required]),
    adress:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    education:new FormControl('',[Validators.required]),
    phoneNo:new FormControl('',[Validators.required])
  })


editData(data:any){
this.server.editStudent(this.data.id,data.value).subscribe(res=>{
  console.log(res);
  location.reload();
})

}


}
