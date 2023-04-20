import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'lazy',loadChildren:()=>import('./lazy/lazy.module')
.then(mod=>mod.LazyModule)},
{path:'edit',component:EditComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
