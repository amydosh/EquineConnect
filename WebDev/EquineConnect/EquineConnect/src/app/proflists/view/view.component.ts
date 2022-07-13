import { ListingService } from './../../service/listing.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  
   // --> UPDATE: Declare your variable:
   public listings:any;
   public verifiedListings=[];
   public searchTerm:string='';
   public verified=[];
   public select:any;
   public userInfo:any;
   public loggedIn:boolean=false;
   public sortedListings=[];
   public thelist: Listing = {
    id:0,
    type:'',
    title:'',
    image:null,
    description:'',
    primcont:'',
    phone:'',
    email:'',
    address:'',
    state:'',
    zip:'',
    website:''
  }

    public viewMode:string = 'default';
  
    constructor(
      private listSrv:ListingService,
      private router:Router,
      ){}
  
  
    // Load the data oninit
    ngOnInit(): void {
      // Load the listings from dB
      this.listings = this.listSrv.getListings().subscribe((data: any)=>{
        console.log(data);
        // Put your data into the listings array which is used to render the cards in your html
        this.listings = data;
        var verifiedListings=[];
      for (let i=0; i<this.listings.length; i++){
        if(this.listings[i].verified=="true"){
          console.log(this.listings[i]);
          verifiedListings.push(this.listings[i]);
          console.log("Verified " + this.listings[i].title);
          console.log(verifiedListings);
        }else{
          console.log("Not verified "+this.listings[i].title);
        }
        console.log(verifiedListings);
        let a = verifiedListings.length;
        console.log(a);
      }
      // Updates the listings to show only the verified ones
      this.listings = verifiedListings;
      }, (errors: any)=>{
        console.log(errors);
      });
    }

  onViewDetails(id:any){
    console.log("View Details triggered for listing "+this.listings.id);
    this.router.navigateByUrl("/viewdetails");
  }

  // DOES NOT WORK --> NEED TO UPDATE
  onSearch(searchTerm:string){
    for (let a=0; a<this.listings.length; a++){
      console.log(this.listings[a].title);
      console.log(searchTerm);
      if (this.listings[a].title===(searchTerm)){
        console.log(this.listings[a]);
        // this.sortedListings.push(this.listings[a]);
        console.log("Matches " + this.listings[a].title);
        console.log(this.sortedListings);
      }else{
        console.log("No matching listings found");
        console.log(this.listings);
      }
      console.log(this.sortedListings);
      let b = this.sortedListings.length;
      console.log(b);
      this.listings = this.sortedListings;
      }
    }
    
    public updatelisting:any;
    public message:string=''
    }

  
    interface Listing {
      id:number,
      type:string,
      title:string,
      image:any,
      description:string,
      primcont:string,
      phone:string,
      email:string,
      address:string,
      state:string,
      zip:string,
      website:string
    }
  
  
  


