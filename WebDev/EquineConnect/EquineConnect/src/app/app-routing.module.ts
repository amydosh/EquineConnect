// import { TestDBComponent } from './component/test-db/test-db.component';
import { ContactComponent } from './component/contact/contact.component';
import { SearchComponent } from './component/search/search.component';
import { SuccessComponent } from './component/success/success.component';
import { EditComponent } from './proflists/edit/edit.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { ViewdetailsComponent } from './proflists/viewdetails/viewdetails.component';
import { AddComponent } from './proflists/add/add.component';
import { ViewComponent } from './proflists/view/view.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//1. define routes
const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'login', component: LoginComponent},
  // { path:'adminlogin', component:AdminloginComponent},
  { path:'register', component:RegisterComponent},
  { path:'logout', component:LogoutComponent},
  { path:'viewlist', component:ViewComponent},
  { path:'addlist', component:AddComponent},
  { path:'viewdetails', component:ViewdetailsComponent},
  { path:'updatelisting', component:EditComponent},
  { path:'success', component:SuccessComponent},
  { path:'search', component:SearchComponent},
  { path:'contact', component:ContactComponent},
  // { path:'test', component:TestDBComponent},
  // { path:'api/thumbnail-upload'},
  // { path:'admindash', component:AdmindashComponent},
  { path:'admin', loadChildren: ()=> import('./admin/admin-routing.module').then(m=> m.AdminRoutingModule)},
  // { path:'users', loadChildren: ()=> import('./component/users/user-routing.module').then(m=> m.UserRoutingModule)},
  // { path:'products', loadChildren: ()=> import('./component/products/product-routing.module').then(m=> m.ProductRoutingModule)},
  { path:'**', component:NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
