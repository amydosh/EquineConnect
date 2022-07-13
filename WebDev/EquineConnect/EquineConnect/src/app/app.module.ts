import { EditComponent } from './proflists/edit/edit.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AddComponent } from './proflists/add/add.component';
import { UserService } from './service/user.service';
import { ListingService } from './service/listing.service';
import { AdminService } from './service/admin.service';
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './users/admin/admin.component';
import { GeneralComponent } from './users/general/general.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProflistsComponent } from './proflists/proflists.component';
import { ViewComponent } from './proflists/view/view.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './component/success/success.component';
import { ContactComponent } from './component/contact/contact.component';
import { SearchComponent } from './component/search/search.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    UsersComponent,
    AdminComponent,
    AdmindashComponent,
    GeneralComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    NotfoundComponent,
    ProflistsComponent,
    ViewComponent,
    AddComponent,
    EditComponent,
    SuccessComponent,
    ContactComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [AdminService, ListingService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
