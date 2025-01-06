import { Component, Input } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SensorenDisplayModel } from '../../../models/sensoren-display.model';

@Component({
  selector: 'app-sensor-type-selector',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './sensor-type-selector.component.html',
  styleUrl: './sensor-type-selector.component.css'
})

export class SensorTypeSelectorComponent {

  @Input() selectedType: SensorenDisplayModel = {
    deveui: "∅",
    type: "∅",
    id:-0,
    availableTypes: []
};

  @Input() sensorTypes: object[] = [];

  @Input() sensorId: string = "";
  
    // values after the equals signs, are the initially assigned values

}
