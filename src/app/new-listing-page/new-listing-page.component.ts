import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent {

  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('creating a new listing...')
    this.router.navigateByUrl('/my-listings')
  }

}
