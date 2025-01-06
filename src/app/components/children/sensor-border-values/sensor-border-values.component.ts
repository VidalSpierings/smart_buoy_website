import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sensor-border-values',
  standalone: true,
  imports: [],
  templateUrl: './sensor-border-values.component.html',
  styleUrl: './sensor-border-values.component.css'
})
export class SensorBorderValuesComponent {

  @Input() data: any;

}
