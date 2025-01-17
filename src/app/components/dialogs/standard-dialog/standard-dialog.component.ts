import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-standard-dialog',
  standalone: true,
  imports: [DialogModule, FormsModule, ButtonModule],
  templateUrl: './standard-dialog.component.html',
  styleUrl: './standard-dialog.component.css'
})
export class StandardDialogComponent {

  displayPrompt: boolean = false;
  userInput: string = "";

  showDialog() {
    this.displayPrompt = true;
  }

  handleOk() {
    this.displayPrompt = false;
  }

  handleCancel() {
    this.displayPrompt = false;
  }
}
