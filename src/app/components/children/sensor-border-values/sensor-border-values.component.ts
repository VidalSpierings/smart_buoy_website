import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sensor-border-values',
  standalone: true,
  imports: [],
  templateUrl: './sensor-border-values.component.html',
  styleUrl: './sensor-border-values.component.css'
})
export class SensorBorderValuesComponent {

  @Input() data: any;

   @Output() editInitiated = new EventEmitter<void>();
  
    onEditInitiated(): void {
      this.editInitiated.emit();
    }
  
    // Perform the onClick action of whatever component is using this component (passed as a prop)

}
