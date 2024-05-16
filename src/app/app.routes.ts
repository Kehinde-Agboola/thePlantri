import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/home-page/home-page.module').then(
        (mod) => mod.HomePageModule
      ),
  },
];
