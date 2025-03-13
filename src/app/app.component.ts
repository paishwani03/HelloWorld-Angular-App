import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule], // Register FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  userName: string = ""; // Two-way binding variable
}
