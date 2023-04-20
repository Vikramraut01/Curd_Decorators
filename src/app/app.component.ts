

import { Component, HostListener, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bind1';

constructor()
{

}

  data="welcome";
  
  recive(event:any)
  {
this.data=event
  }
parentToChild=''
  sendData(data:any)
  {
this.parentToChild=data
  }

@HostListener('document:click',['$event'])
alerP(event:any)
{
if(event.target.matches('.parent'))
{
  this.child.welcome();
  window.alert("i'm in parent")
}
}
@ViewChild(Child2Component) child:any


}

