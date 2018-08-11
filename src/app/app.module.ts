import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';

import {AccordionModule} from 'primeng/accordion';    
import {FileUploadModule} from 'primeng/fileupload';
import { HomeComponent } from './home/home.component';
import { AttackPagesComponent } from './attack-pages/attack-pages.component';
import { AboutComponent } from './about/about.component';
import { ContributorsComponent } from './contributors/contributors.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HomeComponent,
    AttackPagesComponent,
    AboutComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    FileUploadModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
