import { ListingService } from './../../service/listing.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   // --> UPDATE: Declare your variable:
   public listings:any;
   public searchReturn:any;
   public searchComplete:string='false';
   public type:any;
   public verifiedListings:[]=[];
   public searchTerm:string='';
   public verified=[];
   public select:any;
   public userInfo:any;
   public loggedIn:boolean=false;
   public updatelisting:any;
   public message:string=''
   public collectionSize:number=0;
   public collectionSize2:number=0;
   public sortedListings=[];
   public tempArray=[];
   public thelist:Listing = {
    id:0,
    type:'',
    title:'',
    image:null,
    description:'',
    primcont:'',
    phone:'',
    email:'',
    address:'',
    city:'',
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
  onSearch(value:string):void{
    this.searchComplete = 'false';
    console.log(value);
    // console.log(this.listings[1].type)
    this.sortedListings = this.listings.filter((val: { title: string; })=> val.title.toLowerCase().includes(value));
    console.log(this.sortedListings);
    this.tempArray = this.listings.filter((val: { type:string; })=>val.type.toLowerCase().includes(value));
    this.collectionSize = this.sortedListings.length;
    this.collectionSize2 = this.tempArray.length;
    if(this.collectionSize==0 && this.collectionSize2==0){
      this.message="Sorry! No matches were found."
      console.log("No matches found");
      this.searchComplete = 'empty';
    } if(this.collectionSize==0 && this.collectionSize2!=0){
      console.log(this.tempArray);
      this.searchReturn = this.tempArray;
      this.searchComplete = 'true';
      console.log("Matches by type found");
    } if(this.collectionSize!=0 && this.collectionSize2==0){
      console.log(this.collectionSize2);
      console.log(this.sortedListings);
      this.searchReturn = this.sortedListings;
      this.searchComplete = 'true';
      console.log("Matches by Name found");
    } if(this.collectionSize!=0 && this.collectionSize2!=0){
      console.log(this.tempArray);
      this.searchReturn.push(this.sortedListings);
      this.searchReturn.push(this.tempArray);
      console.log(this.listings);
      this.searchComplete = 'true';
      console.log("Matches by Type and Name found")
    }

        // for(let v=0; v<this.listings.length; v++){
    //   for(let i=0; i<this.listings[v].type.length; i++){
    //     this.tempArray = this.listings.type[i].filter((val: { type:string; })=>val.type.toLowerCase().includes(value));
    //     console.log(this.tempArray);
    //   }
    // }
      }

    //   onSearchByType(value:string):void{
    //     console.log(value);
    //     this.sortedListings = this.listings.filter((val: { type: string; })=> val.type.toLowerCase().includes(value));
    //     this.collectionSize = this.sortedListings.length;
    //     if(this.collectionSize==0){
    //       this.message="Sorry! No matches were found."
    //       this.searchComplete = 'empty';
    //     } else{
    //       console.log(this.sortedListings);
    //       this.searchComplete = 'true';
    //     }
    //   }
    // }
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
      city:string,
      state:string,
      zip:string,
      website:string
    }