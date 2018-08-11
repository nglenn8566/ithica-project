import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'file-upload', component: FileUploadComponent},
  {path:'home', component: HomeComponent},

  {path: '', redirectTo: 'home', pathMatch:'prefix'},
  {path:'**', redirectTo:'home', pathMatch:'prefix'}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
