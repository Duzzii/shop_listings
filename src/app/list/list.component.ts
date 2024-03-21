import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{

  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings

  }


}
