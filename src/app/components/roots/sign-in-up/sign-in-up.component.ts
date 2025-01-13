import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-up',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './sign-in-up.component.html',
  styleUrl: './sign-in-up.component.css'
})
export class SignInUpComponent {

  enterEmailText: string = "";
  enterPasswordText: string = "";

  constructor(private router: Router) { }

  onRegisterClicked(): void {
    console.log('Register button pressed');
    if (this.enterEmailText !== "" && this.enterPasswordText !== "") {
      this.router.navigate(['/home']);
    }
  }

  onLoginClicked(): void {
    console.log('Log In button pressed');
    if (this.enterEmailText !== "" && this.enterPasswordText !== "") {
      this.router.navigate(['/home']);
    }  
  }

}
