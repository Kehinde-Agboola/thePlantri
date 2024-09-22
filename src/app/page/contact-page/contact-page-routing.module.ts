import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ContactPageComponent } from './contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}
