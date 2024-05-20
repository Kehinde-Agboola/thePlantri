import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFooterComponent } from './layout/page-footer/page-footer.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    PageFooterComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'thePlantri';
}
