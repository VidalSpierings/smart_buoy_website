import { Component, inject } from '@angular/core';
import { SensorenService } from '../../../services/sensoren.service';
import { SensorTypeSelectorComponent } from '../../children/sensor-type-selector/sensor-type-selector.component';
import { SensorenModel } from '../../../models/sensoren.model';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SensorenDisplayModel } from '../../../models/sensoren-display.model';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sensoren',
  standalone: true,
  imports: [
    SensorTypeSelectorComponent,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule
    ],
  templateUrl: './sensoren.component.html',
  styleUrl: './sensoren.component.css',
})

export class SensorenComponent {

  sensorenService: SensorenService = inject(SensorenService);

  availableTypes: object[] = [];

  id: string = "";

  sensorenDisplayModel!: SensorenDisplayModel;

  searchBarText: string = "";

  cookieService = inject(CookieService);

  constructor(){

    console.log(`--- persisted sensor data ---- :${this.cookieService.get('data')}`);

    this.sensorenService.getSensorTypes().then((sensorenModel) => {

      this.availableTypes = sensorenModel.availableTypes.map(value => ({ availableType: value }));
      this.id = `ID: ${sensorenModel.id}`;
      this.sensorenDisplayModel = {
        deveui: sensorenModel.deveui,
        type: {availableType: sensorenModel.type},
        id: sensorenModel.id,
        availableTypes: sensorenModel.availableTypes.map(value => ({ availableType: value }))
    };

    this.cookieService.set('data', JSON.stringify(this.sensorenDisplayModel));

    }).catch((error) => {

      console.error('Error fetching data:', error);

    });
  }

}