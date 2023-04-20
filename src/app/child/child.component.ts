import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  
  
dom:string='ksnjnd'
@Output() demo:any=new EventEmitter();

sendData(data:any)
{
  this.demo.emit(data);
}

}
