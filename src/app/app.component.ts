import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { FormsModule } from '@angular/forms'; // Import FormsModule

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',

  standalone: true,
  imports: [CommonModule, FormsModule],

  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule], // Register FormsModule


@Component({
  selector: 'app-root',


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


  message: string = "Hello from BridgeLabz";
  userName: string = ""; // Two-way binding variable


  message: string = "Hello from BridgeLabz";
  logoUrl: string = "BLlogo.jpg";
  websiteUrl: string = "https://www.bridgelabz.com"; // Website URL

  openBridgeLabz(): void {
    window.open(this.websiteUrl, "_blank"); // Opens the website in a new tab
  }


  message: string = "Hello from BridgeLabz";
  logoUrl: string = "BLlogo.jpg"; // Logo URL

  message: string = "Hello from BridgeLabz"; // Data Binding with Interpolation


}
