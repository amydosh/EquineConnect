import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Define variables for User information
  public user: User = {
    firstName:'',
    lastName:"",
    password:'',
    email:'',
    state:'',
    zipcode:0,
    agree:false
  }
  public submitted:boolean = false;

  // Constructor
  constructor(
    private userSrv:UserService, 
    private router:Router
    ) { }

    // Do not need to load any data on init
  ngOnInit(): void {
  }

  // Define the onSubmit actions for the registration form
  onSubmit(form:any) {
    if(form.valid){
      this.submitted = true;
      console.log(this.user);
      this.userSrv.addUser(this.user).subscribe(res=>{
        console.log("User has been successfully registered.");
        this.router.navigateByUrl("/login"); 
      })
      console.log("The form has submited");
    } else{
      this.validate(form);
      console.log("The form cannot be submited");
    }    
  }

  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

  validate(form:any){
    // console.log(form);
    // console.log(form.controls);
     Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true});
      });
  }
  
}

// Define a custom interface for User
interface User {
  firstName:string;
  lastName:string;
  password:string;
  email:string;
  state:string;
  zipcode:number;
  agree:boolean;
}