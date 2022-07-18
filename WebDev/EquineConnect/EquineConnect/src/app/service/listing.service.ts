import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  // 1. Create http client dependency
  constructor(private httpClient: HttpClient) { }

  // 2. Define webservice URI
  private url:string = "http://localhost:3306/listings";
  // private url:string = 

  // Get all products
  public getListings(){
    return this.httpClient.get(this.url);
  }

  // Get one product
  public getListing(id:number){
    this.httpClient.get(this.url);
  }

  // Add product
  public addListing(listing:any){
    return this.httpClient.post(this.url,listing);
  }

  // Update product
  public updateListing(listing:any){
    return this.httpClient.put(`${this.url}/${listing.id}`,listing);
  }

  // Delete product
  public deleteListing(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  // Verify a listing
  // public verifyListing(listing:any){
  //   let verified=true;
  //   return this.httpClient.put(`${this.url}/${listing.id}`)
  // }
}
