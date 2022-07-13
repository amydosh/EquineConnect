import { UserService } from './../service/user.service';
import { ListingService } from './../service/listing.service';
import { AdminService } from './../service/admin.service';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdmindashComponent,
    AdminloginComponent,
    ManageusersComponent,
    UpdateadminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgModule,
    RouterModule
  ],
  providers: [AdminService, ListingService, UserService],
  bootstrap: [AppComponent]
})
export class AdminModule { }
