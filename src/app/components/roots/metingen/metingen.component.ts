import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgFor } from '@angular/common';
import { MetingenService } from '../../../services/metingen.service';
import { SplitListComponent } from "../../children/split-list/split-list.component";

@Component({
  selector: 'app-metingen',
  standalone: true,
  imports: [FormsModule, InputTextModule, NgFor, SplitListComponent],
  templateUrl: './metingen.component.html',
  styleUrl: './metingen.component.css'
})
export class MetingenComponent {

  buoyId: string = "";

  searchBarText: string = "";

  timestamp: string = "";

  measurementsInFull: string = "";

  metingenService: MetingenService = inject(MetingenService);

  allTimestamps: string[] = [];

  componentsData: { timestampnew: string; measurementsInFullnew: string }[] = [];

  constructor(){

    this.metingenService.getMeasurementsForTimestamps().then((metingenModel) => {

      this.buoyId = "1";

      for (let i = 0; i <= Object.keys(metingenModel).length; i++) {
        
        this.measurementsInFull = "";
      
        const currentTimestamp = Object.keys(metingenModel)[i];
      
        this.allTimestamps.push(currentTimestamp);
      
        const timestampData = metingenModel[currentTimestamp];
      
        const itemCount = Object.keys(timestampData).length;

        let metaDatalabelText: string = "";
      
        for (let iLabelValue = 0; iLabelValue < itemCount; iLabelValue++) {

          const itemKey = Object.keys(timestampData)[iLabelValue];
      
          const itemData = timestampData[itemKey];
      
          if (itemData.indicator_color === "red") {
            this.measurementsInFull += `${itemData.name}🔴: ${itemData.value} | `;
          } else {
            this.measurementsInFull += `${itemData.name}🟢: ${itemData.value} | `;
          }
        }

        metaDatalabelText = this.measurementsInFull

        this.componentsData.push({
          timestampnew: currentTimestamp,
          measurementsInFullnew: metaDatalabelText
        });      
      }


    }).catch((error) => {

      console.error('Error fetching data:', error);

    });

  }

}
