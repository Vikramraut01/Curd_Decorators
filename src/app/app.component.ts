import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bind1';

ds="";
  sayHii(data:string)
  {
console.log(data);
this.ds=data;
  }

  data="Senwell";
  


}
