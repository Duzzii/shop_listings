import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  email: string = '';
  message: string = '';
  listing?: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){ 
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
    if (this.listing) {
      this.message = `Hi, I am interested in your ${this.listing.name.toLowerCase()}!`;
    }
  }

  sendMessage(): void{
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
