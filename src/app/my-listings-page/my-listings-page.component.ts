import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit{

  listings: Listing[] = [];

  constructor(){}

  ngOnInit(){
    this.listings = fakeListings;
  }
  
  onDeleteListingClick(listingId: string): void {
    alert(`Deleting listing ${listingId}`);
  }
}
