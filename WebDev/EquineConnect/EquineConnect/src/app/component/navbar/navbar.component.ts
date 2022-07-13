import { ListingService } from './../../service/listing.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public listings:any;
  public searchTerm:string='';
  public sortedListings=[];

  constructor(
    private listSrv:ListingService,
    private router:Router
  ) { }

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

  // DOES NOT WORK --> NEED TO UPDATE
  onSearch(searchTerm:string){
    for (let a=0; a<this.listings.length; a++){
      if (this.listings[a].title===(searchTerm)){
        console.log(this.listings[a]);
        // this.sortedListings.push(this.listings[a]);
        console.log("Matches " + this.listings[a].title);
        console.log(this.sortedListings);
      }else{
        console.log("Not verified "+this.listings[a].title);
      }
      console.log(this.sortedListings);
      let b = this.sortedListings.length;
      console.log(b);
      }
    }
  

}
