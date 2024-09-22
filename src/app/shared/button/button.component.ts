import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() btnClass: string = ''; // Allow passing custom classes
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit(); // Emit event when button is clicked
  }
}
