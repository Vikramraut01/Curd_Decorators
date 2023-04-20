import { NgSwitch } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup,FormControl,Validator,FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {

  constructor(private http:HttpClient, private server:ServiceService,private fb:FormBuilder )
  {
   
  }
  ngOnInit() {
    
  }

  allArray:any=[];

studentDetail=this.fb.group({
  name:new FormControl('',[Validators.required]),
  adress:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  education:new FormControl('',[Validators.required]),
  phoneNo:new FormControl('',[Validators.required])

})
editDetail=this.fb.group({
  name:new FormControl('',[Validators.required]),
  adress:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  education:new FormControl('',[Validators.required]),
  phoneNo:new FormControl('',[Validators.required])

})

editId:any;
emptyOrNot:boolean=false;
submitData()
{
  this.server.addData(this.studentDetail.value).subscribe(res=>
    
    {
      console.log(res);
     
      this.allData(1);
    })

}
alrt=0;
allData(alrt:any)
{
  this.alrt=alrt;
  this.server.getAllData().subscribe(res=>
    {
      this.allArray=res;
      //console.log(this.allArray);
     
    })
}

deletStudent(index:any,num:any)
{
  console.log(num)
this.server.deletStudent(num).subscribe(res=>
  {
    this.allArray.splice(index,1)
    
    //console.log(res);
  })
}

editStudent(index:any,id:any)
{
  this.editDetail.controls['name'].setValue(this.allArray[index].name);
this.editDetail.controls['adress'].setValue(this.allArray[index].adress);
this.editDetail.controls['email'].setValue(this.allArray[index].email);
this.editDetail.controls['education'].setValue(this.allArray[index].education);
this.editDetail.controls['phoneNo'].setValue(this.allArray[index].phoneNo);

this.editId=id;

}

updateData(data:any)
{
   console.log(data)
   this.server.editStudent(this.editId,data).subscribe(res=>
    {
      console.log(res);
      this.allData(1);
    })
}

}