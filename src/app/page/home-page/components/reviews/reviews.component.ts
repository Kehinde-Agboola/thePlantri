import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent implements OnInit {
  rating: number;
  name: string;
  content: string;
  location: string;

  constructor() {
    this.rating = 4; // Example rating
    this.name = 'John Doe'; // Example name
    this.content =
      'This is a great product! I really enjoyed using it. Highly recommend to others.'; // Example content
    this.location = 'New York, USA'; // Example location
  }

  ngOnInit(): void {}
}
