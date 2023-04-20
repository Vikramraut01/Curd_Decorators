import { Component, Inject, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogData, DialougeComponent } from '../dialouge/dialouge.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(private server:ServiceService,public dialog: MatDialog){

  }
  data: any;
  allArray:any=[]
  ngOnInit(): void {
   

    this.server.getAllData().subscribe(res=>{
      this.allArray=res;
      
    })
    
  }
 
  displayedColumns: string[] = ['name', 'adress', 'email', 'education','phoneNo','delete','update'];

  deletStudent(id:any)
  {
this.server.deletStudent(id).subscribe(res=>{
  console.log(res);
  this.ngOnInit()

})
  }

  openDialog(ele:any) {
   
    this.dialog.open( DialougeComponent, {
      data: {
        id:ele.id,
        name:ele.name,
        adress:ele.adress,
        email:ele.email,
        education:ele.education,
        phoneNo:ele.phoneNo

,
      },
    });
  }
}



