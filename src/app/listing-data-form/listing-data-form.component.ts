import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent {
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
