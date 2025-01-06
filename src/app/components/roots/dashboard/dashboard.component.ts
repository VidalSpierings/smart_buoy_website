import { Component, inject } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { MeasurementTypeCircleComponent } from "../../children/measurement-type-circle/measurement-type-circle.component";
import { NgForOf } from '@angular/common';
import { BuoyStatisticsComponent } from "../../children/buoy-statistics/buoy-statistics/buoy-statistics.component";
import { BuoysMapComponent } from "../../children/geo-location/buoys-map/buoys-map.component";
import { AddCircleComponent } from "../../children/add-circle/add-circle.component";
import { DashboardSerialNumberComponent } from "../../children/dashboard-serial-number/dashboard-serial-number.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MeasurementTypeCircleComponent, NgForOf, BuoyStatisticsComponent, BuoysMapComponent, AddCircleComponent, DashboardSerialNumberComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dashboardService: DashboardService = inject(DashboardService);

  componentsData: { measurementTypeEmojiText: string; measurementText: string }[] = [];

  constructor() {

    this.dashboardService.getBuoyData().then((dashboardModel) => {

      const numMeasurementTypes = Object.keys(dashboardModel.waarde).length;

      /*

      // The "waarde" field, contains all registered measurement types for a given buoy.
      // Above code retrieves the total count of measurement types

      */

      for (let i = 0; i < numMeasurementTypes; i++) {
        this.componentsData.push({
          measurementTypeEmojiText: `${Object.keys(dashboardModel.waarde)[i]}`,
          measurementText: `${Object.values(dashboardModel.waarde)[i]}`
        });
      }

    }).catch((error) => {

      console.error('Error fetching data:', error);

    });

  }

}