import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-serial-number',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-serial-number.component.html',
  styleUrl: './dashboard-serial-number.component.css'
})
export class DashboardSerialNumberComponent {

   @Output() editInitiated = new EventEmitter<void>();

  onEditInitiated(): void {
    this.editInitiated.emit();
  }

}
