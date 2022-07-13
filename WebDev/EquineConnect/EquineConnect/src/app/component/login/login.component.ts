import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Define variables and FormGroup
    public loginForm : FormGroup;
    public message:string="";
    public trialdata:string='';
   
     constructor(
      private formBuilder : FormBuilder, 
      private userSrv:UserService, 
      private router:Router, 
      private activatedRoute:ActivatedRoute
      ) {
        // Form Validators
       this.loginForm = this.formBuilder.group({
         email : ['', [Validators.required , Validators.minLength(6), Validators.maxLength(50), Validators.email]],
         password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
         rememberme:['', Validators.required]
       });
   
     }
   
     ngOnInit(): void {
     }
     // Define Form submission actions
     // --> Update to remove product references
     public onSubmit(loginForm:any) {
       if(loginForm.valid){
         console.log(this.loginForm.value);
         this.userSrv.getUserByEmail(this.email.value).subscribe((res:any)=>{
           if(res!=null && res!=undefined && res.length!=0){
             if(res[0].password === (this.password.value)){
               console.log(res);
               console.log(this.email.value);
               sessionStorage.setItem("user",this.email.value);
               if(res[0].type=="admin"){
                 this.router.navigateByUrl("/admin/admindash");
               }
               else{
                 // --> UPDATE THIS
                this.router.navigateByUrl("/userdash");
               }
             }else{
               this.message="Passwords do not match!";
               console.log("Password incorrect!");
             }
           } else{
             this.message = "User does not exist!";
             console.log("User does not exist!");
           }
         });
       } else{
         console.log("Invalid Form !");
         this.validate(loginForm);
       }
     }
   
     public validate(form:any){
       Object.keys(form.controls).forEach(field => {
         const control = form.controls[field];
         if(control instanceof FormControl){
           control.markAsTouched({ onlySelf: true});
         } else{
           this.validate(control);
         }
       });
     }
   
     hasError(fieldName:string) {
       let field = this.loginForm.get(fieldName);
       return (field?.invalid && field?.touched && field?.errors);
     }
   
     get form() {
       return this.loginForm.controls;
     }
   
     get email() {
       return this.form['email'];
     }
   
     get password() {
       return this.form['password'];
     }
   
     get rememberme() {
       return this.form['rememberme'];
     }
   }
