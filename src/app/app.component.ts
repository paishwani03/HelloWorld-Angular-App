import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string = "Hello from BridgeLabz";
  logoUrl: string = "BLlogo.jpg"; // Logo URL

  message: string = "Hello from BridgeLabz"; // Data Binding with Interpolation

}
