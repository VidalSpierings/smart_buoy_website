import { Component, inject } from '@angular/core';
import { SensorenService } from '../../../services/sensoren.service';
import { SensorTypeSelectorComponent } from '../../children/sensor-type-selector/sensor-type-selector.component';
import { SensorenModel } from '../../../models/sensoren.model';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SensorenDisplayModel } from '../../../models/sensoren-display.model';

@Component({
  selector: 'app-sensoren',
  standalone: true,
  imports: [
    SensorTypeSelectorComponent,
    FormsModule,
    InputTextModule
    ],
  templateUrl: './sensoren.component.html',
  styleUrl: './sensoren.component.css'
})

export class SensorenComponent {

  sensorenService: SensorenService = inject(SensorenService);

  availableTypes: object[] = [];

  id: string = "";

  sensorenDisplayModel!: SensorenDisplayModel;

  searchBarText: string = "";

  constructor(){

    this.sensorenService.getSensorTypes().then((sensorenModel) => {

      this.availableTypes = sensorenModel.availableTypes.map(value => ({ availableType: value }));
      this.id = `ID: ${sensorenModel.id}`;
      this.sensorenDisplayModel = {
        deveui: sensorenModel.deveui,
        type: sensorenModel.type,
        id: sensorenModel.id,
        availableTypes: sensorenModel.availableTypes.map(value => ({ availableType: value }))
    };

    }).catch((error) => {

      console.error('Error fetching data:', error);

    });
  }

}

// TODO: Met behulp van map functie, da arrays omzetten naar JS objecten, en zoekbalk toevoegen
