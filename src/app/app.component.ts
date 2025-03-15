import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  userName: string = "";
  errorMessage: string = "";

  validateName(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Must start with capital & be at least 3 letters

    if (namePattern.test(input)) {
      this.userName = input;
      this.errorMessage = "";
    } else {
      this.userName = input;
      this.errorMessage = "Name is incorrect!";
    }
  }
}
