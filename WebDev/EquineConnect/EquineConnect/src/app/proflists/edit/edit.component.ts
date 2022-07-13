import { ListingService } from './../../service/listing.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public state:any;
  public listingForm : FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private listSrv : ListingService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.listingForm = this.formBuilder.group({
      id : [null],
      title: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      description:['', Validators.required],
      type:[''],
      primcont:[null, Validators.required],
      image:[''],
      website:[''],
      phone:[''],
      email:[''],
      state:[''],
      verified:[false],
      city:['', Validators.required],
      zip:['']
    });

  }

  ngOnInit(): void {
    this.state = this.activatedRoute.paramMap.pipe(()=>window.history.state);
    console.log(this.state);
    this.listingForm.patchValue(this.state);
    
  }

  public onSubmit(listingForm:any) {
    if(listingForm.valid){
      console.log(this.listingForm.value);
      
      // Write logic to update a listing:
      this.listSrv.updateListing(this.listingForm.value).subscribe(res=>{
        // console.log(res);
        this.router.navigateByUrl('/admin/admindash');
        console.log("Listing was successfully updated");
      });
    } else{
      console.log("Invalid Form !");
      this.validate(listingForm);
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
    let field = this.listingForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.listingForm.controls;
  }

  get id() {
    return this.form['id'];
  }

  get title() {
    return this.form['title'];
  }

  get description() {
    return this.form['description'];
  }

  get primcont(){
    return this.form['primcont'];
  }

  get phone(){
    return this.form['phone'];
  }

  get email(){
    return this.form['email'];
  }

  get image(){
    return this.form['image'];
  }

  get city(){
    return this.form['city'];
  }

  get theState(){
    return this.form['state'];
  }

  get type(){
    return this.form['type'];
  }

  get zip(){
    return this.form['zip'];
  }

  get website(){
    return this.form['website'];
  }

  get verified(){
    return this.form['verified'];
  }
}


