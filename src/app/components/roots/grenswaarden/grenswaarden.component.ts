import { Component, inject } from '@angular/core';
import { GrenswaardenService } from '../../../services/grenswaarden.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule, NgFor } from '@angular/common';
import { SensorBorderValuesComponent } from "../../children/sensor-border-values/sensor-border-values.component";

@Component({
  selector: 'app-grenswaarden',
  standalone: true,
  imports: [FormsModule, InputTextModule, NgFor, CommonModule, SensorBorderValuesComponent],
  templateUrl: './grenswaarden.component.html',
  styleUrl: './grenswaarden.component.css'
})
export class GrenswaardenComponent {

  grenswaardenService: GrenswaardenService = inject(GrenswaardenService);

  searchBarText: string = "";

  buoyId: string = "";

  dateOfPlacementText: string = "";

  locationNameText: string = "";

  borderValuesComponentsData: { name: string, slechtonder: number, slechtboven: number }[] = [];

  constructor(){

    this.grenswaardenService.getBorderValuesData().then((grenswaardenModel) => {

      this.buoyId = grenswaardenModel.name
      this.dateOfPlacementText = grenswaardenModel.plaatsingsdatum;
      this.locationNameText = grenswaardenModel.locationName;

      Object.keys(grenswaardenModel.borderValues).forEach((key) => {
        this.borderValuesComponentsData.push({
          name: grenswaardenModel.borderValues[key].name,
          slechtonder: grenswaardenModel.borderValues[key].slechtonder,
          slechtboven: grenswaardenModel.borderValues[key].slechtboven
        });
      });

    }).catch((error) => {

      console.error('Error fetching data:', error);

    });

  }

}