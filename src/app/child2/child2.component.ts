import { Component ,DoCheck,Input,OnChanges,OnInit,Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnChanges ,OnInit,DoCheck{
 
// LifeCycleofhooks

  ngOnChanges(changes: SimpleChanges){
   
    console.log("onchangesCalled");
  }

  ngOnInit(){
    console.log("onInit Called")
  }
  ngDoCheck(){
    console.log("docheckCalled")
   }

  @Input() hero:string='';
  
wel=''

  welcome()
  {
this.wel='please come'
  }

 

}
