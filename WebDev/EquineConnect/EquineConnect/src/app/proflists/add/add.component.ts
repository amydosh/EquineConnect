import { ContactService } from './../../service/contact.service';
import { ListingService } from './../../service/listing.service';
import { UserService } from './../../service/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, pipe, Subscription } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {

  // @Input()


  // Define variables
  public listing: Listing = {
    id: 0,
    type: '',
    title: '',
    image: '',
    description: '',
    primcont: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    website: '',
    verified: 'false'
  }
  public requiredFileType:string='';
  public fileName:string='';
  public uploadProgress:number=0;
  public uploadSub: Subscription = new Subscription;
  public types:any;
  public temp:string='';
 
   constructor(
    private listSrv:ListingService, 
    private router:Router,
    private httpClient:HttpClient, 
    private contact:ContactService
    ) {
   }
 
   ngOnInit(): void {
   }
   // Define Form submission actions
   public onSubmit(form:any) {
    if(form.valid){
      console.log(this.listing);
      // this.contact.PostMessage(FormData)
      // .subscribe(response => {
      //   location.href='https://mailthis.to/confirm';
      //   console.log(response);
      //   console.log("Listing has been successfully added");
      //   this.router.navigateByUrl("/success"); 
      // }, error=> {
      //   console.warn(error.responseText);
      //   console.log({error});
      // })



      // --> Update later
      for(let i=0; i<this.listing.type.length-1; i++){
        console.log(this.listing.type[i]);
        this.types = this.listing.type[i].toString;
        this.temp = this.temp.concat(this.listing.type[i]+", ");
        console.log(this.temp);
      }
      let y = this.listing.type.length - 1;
      this.temp = this.temp.concat(this.listing.type[y]);
      console.log(this.temp);
      this.listing.type = this.temp;
      console.log(this.listing.type);
      console.log(this.listing);
      this.listSrv.addListing(this.listing).subscribe(res=>{
        console.log("Listing has been successfully added");
        this.router.navigateByUrl("/success"); 
      })
      console.log("The form has been submited");
    } else{
      this.validate(form);
      console.log("The form cannot be submited");
    }    
    
  }


  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

  validate(form:any){
     Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true});
      });
  }

  cancelUpload(){
    this.uploadSub.unsubscribe();
    this.reset();
  }
  
  reset() {
    this.uploadProgress = 0;
    // this.uploadSub = null;
  }

  onFileSelected(event:any){
    const file:File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail",file);

      const upload$ = this.httpClient.post("/api/thumbnail-upload", formData, {
      reportProgress: true,
      observe:'events'
      }).pipe(
      finalize(()=> this.reset())
    );
    this.uploadSub = upload$.subscribe(event => {
      if(event.type==HttpEventType.UploadProgress){
        this.uploadProgress = Math.round(100*(event.loaded/100));
      }
    })
  }
}
}



// Define a custom interface for Listing
interface Listing {
  id: number,
  type: string,
  title: string,
  image: string,
  description: string,
  primcont: string,
  phone: string,
  email: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  website: string,
  verified: string
}
  