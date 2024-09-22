import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/home-page/home-page.module').then(
        (mod) => mod.HomePageModule
      ),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./page/collection-page/collection-page.module').then(
        (mod) => mod.CollectionPageModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./page/shop-page/shop-page.module').then(
        (mod) => mod.ShopPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./page/about-page/about-page.module').then(
        (mod) => mod.AboutPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./page/about-page/about-page.module').then(
        (mod) => mod.AboutPageModule
      ),
  },
];
