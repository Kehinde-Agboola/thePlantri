import { Component } from '@angular/core';

@Component({
  selector: 'app-service-offer',
  standalone: true,
  imports: [],
  templateUrl: './service-offer.component.html',
  styleUrl: './service-offer.component.scss',
})
export class ServiceOfferComponent {
  Van = '../../../assets/van.svg';
  Wallet = '../../../assets/wallet.svg';
  Turn = '../../../assets/easy-turn.png';
}
