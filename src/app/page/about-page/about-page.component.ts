import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {}
