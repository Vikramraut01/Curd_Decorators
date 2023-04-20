import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

import { SessionComponent } from './session/session.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule,} from '@angular/material/button';
import { EditComponent } from './edit/edit.component';
import { CurdMatComponent } from './curd-mat/curd-mat.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialougeComponent } from './dialouge/dialouge.component';
import { YoutubeComponent } from './youtube/youtube.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    SessionComponent,
    EditComponent,
    CurdMatComponent,
    DialougeComponent,
    YoutubeComponent
  ],
  imports: [
      BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
