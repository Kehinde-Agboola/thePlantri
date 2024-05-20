import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceOfferComponent } from './components/service-offer/service-offer.component';
import { BloomingBeautyComponent } from './components/blooming-beauty/blooming-beauty.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BlogComponent } from './components/blog/blog.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    HeroComponent,
    ServiceOfferComponent,
    BloomingBeautyComponent,
    ReviewsComponent,
    BlogComponent,
  ],
})
export class HomePageComponent {}
