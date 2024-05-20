import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  Indoor = '../../../assets/indoor.svg';
  Succulent = '../../../assets/succulent.svg';
  PlantCare = '../../../assets/plantcare.svg';
}
