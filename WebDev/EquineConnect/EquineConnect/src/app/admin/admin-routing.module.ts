import { ManageusersComponent } from './manageusers/manageusers.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes =[
  { path:'adminlogin', component:AdminloginComponent},
  { path:'admindash', component:AdmindashComponent},
  { path:'updateadmin', component:UpdateadminComponent},
  { path:'manageusers', component:ManageusersComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
