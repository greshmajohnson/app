import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hobbyist';
  isAuthenticated = false;

  constructor(private authService: AuthenticationService) {
    authService.getAuthenicationStatus().subscribe((value) => {
      this.isAuthenticated = value;
    });
  }

  logout() {
    const response = this.authService.logout();
    console.log(response);
  }
}
