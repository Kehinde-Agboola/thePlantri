import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  Logo = '../../../assets/logo.svg';
  Search = '../../../assets/search.svg';
  Cart = '../../../assets/cart.svg';
  User = '../../../assets/user.svg';
}
