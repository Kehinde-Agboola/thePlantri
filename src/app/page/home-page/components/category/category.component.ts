import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
// export class CategoryComponent {

// }
export class CategoryComponent {
  categories: string[] = [
    'Outdoor Plant',
    'Indoor Plant',
    'Flower Pot',
    'New Plants',
  ];
  selectedCategory = 'Outdoor Plant';

  products = [
    {
      name: 'Peace Lily',
      category: 'Outdoor Plant',
      price: 23000,
      image: '../../../../../assets/indoor.svg', // Replace with actual image paths
    },
    {
      name: 'Peace Lily',
      category: 'Outdoor Plant',
      price: 23000,
      image: '../../../../../assets/indoor.svg', // Replace with actual image paths
    },
    {
      name: 'Peace Lily',
      category: 'Indoor Plant',
      price: 23000,
      image: '../../../../../assets/indoor.svg',
    },
    {
      name: 'Peace Lily',
      category: 'Flower Pot',
      price: 23000,
      image: '../../../../../assets/indoor.svg',
    },
    {
      name: 'Peace Lily',
      category: 'Flower Pot',
      price: 23000,
      image: '../../../../../assets/indoor.svg',
    },
    {
      name: 'Peace Lil',
      category: 'New Plants',
      price: 23000,
      image: '../../../../../assets/indoor.svg',
    },
    {
      name: 'Peace Lil',
      category: 'New Plants',
      price: 23000,
      image: '../../../../../assets/indoor.svg',
    },
  ];

  get filteredProducts() {
    return this.products.filter(
      (product) =>
        this.selectedCategory === 'See all' ||
        product.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
