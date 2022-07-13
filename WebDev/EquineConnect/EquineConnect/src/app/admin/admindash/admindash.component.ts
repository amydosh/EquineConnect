import { AdminService } from './../../service/admin.service';
import { UserService } from './../../service/user.service';
import { ListingService } from './../../service/listing.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

 // Declare your variable:
public listings:any;
public admins:any;
public users:any;
public adminmessage:any;
public viewMode:string= 'listing';
public theListing:any;

// 1a. Inject the data service to load the data:
// constructor(private dataSrv:DataService) { }

// 1b. Use your Product Service --> springboot
constructor(
  private listingSrv:ListingService,
  private router:Router,
  private userSrv:UserService,
  private adminSrv:AdminService
  // private formBuilder:FormBuilder
  ){}

// 2. Load the data oninit
ngOnInit(): void {
  this.adminmessage = sessionStorage.getItem("adminmessage");
  // For 1a:
 //  this.products = this.dataSrv.products;

  // For 1b:
  this.listings = this.listingSrv.getListings().subscribe((data: any)=>{
    console.log(data);
    // Put your data into the products array which is used to render the cards in your html
    this.listings = data;
  }, (errors: any)=>{
    console.log(errors);
  });

  this.users = this.userSrv.getUsers().subscribe((data: any)=>{
   console.log(data);
   // Put your data into the products array which is used to render the cards in your html
   this.users = data;
 }, (errors: any)=>{
   console.log(errors);
 });

 // --> Need to grab SPECIFIC admin info...
 this.admins = this.adminSrv.getAdmins().subscribe((data: any)=>{
   console.log(data);
   this.admins = data;
 }, (errors: any)=>{
   console.log(errors);
 });

 let adminmessage = sessionStorage.getItem("adminmessage");

 // For both:
 console.log(this.users);
 console.log(this.listings);
 console.log(this.admins);
}


// --> Actions
onEdit(listing:any){
  console.log("Edit triggered for : "+listing);
  this.router.navigateByUrl('/updatelisting', {state: listing})
}

onVerify(listing:any){
  console.log("Verify triggered for : "+listing);
  this.theListing = this.listingSrv.getListing(listing);
  console.log(this.theListing);
  // this.listingSrv.verifyListing(listing:any).subscribe(res =>{
  //   console.log("Listing has been successfully verifierd.");
  // })
}


onDelete(id:number){
  console.log("Delete triggered for : "+id);
  this.listingSrv.deleteListing(id).subscribe((res: any)=>{
    console.log("Listing has been successfully deleted");
    
  })
}

onEditUser(user:any){
 console.log("Edit triggered for : "+user);
 this.router.navigateByUrl('/users/update', {state: user})
}


onDeleteUser(id:number){
 console.log("Delete triggered for : "+id);
 this.userSrv.deleteUser(id).subscribe((res: any)=>{
   console.log("User has been successfully deleted");
   
 })
}

onEditAdmin(admin:any){
 console.log("Edit triggered for : "+admin);
 this.router.navigateByUrl('/updateadmin', {state: admin})
}


onDeleteAdmin(id:number){
 console.log("Delete triggered for : "+id);
 this.adminSrv.deleteAdmin(id).subscribe((res: any)=>{
   console.log("Admin account has been successfully deleted");
   
 })
}
}

