import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  Hero = '../../../assets/heroImg.svg';
  CreamPot = '../../../assets/cream-pot.png';
  BlackPot = '../../../assets/black-pot.png';
  WhitePot = '../../../assets/white-pot.png';
}
