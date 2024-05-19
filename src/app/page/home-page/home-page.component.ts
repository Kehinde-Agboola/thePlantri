import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceOfferComponent } from './components/service-offer/service-offer.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [HeroComponent, ServiceOfferComponent],
})
export class HomePageComponent {}
