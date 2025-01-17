import { Component, inject } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { MeasurementTypeCircleComponent } from "../../children/measurement-type-circle/measurement-type-circle.component";
import { NgForOf } from '@angular/common';
import { BuoyStatisticsComponent } from "../../children/buoy-statistics/buoy-statistics/buoy-statistics.component";
import { BuoysMapComponent } from "../../children/geo-location/buoys-map/buoys-map.component";
import { AddCircleComponent } from "../../children/add-circle/add-circle.component";
import { DashboardSerialNumberComponent } from "../../children/dashboard-serial-number/dashboard-serial-number.component";
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MeasurementTypeCircleComponent,
    NgForOf,
    BuoyStatisticsComponent,
    BuoysMapComponent,
    AddCircleComponent,
    DashboardSerialNumberComponent,
    DialogModule,
    FormsModule,
    ButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dashboardService: DashboardService = inject(DashboardService);

  displayPrompt: boolean = false;

  displayPromptDelete: boolean = false;

  userInput: string = "";

  componentsData: { measurementTypeEmojiText: string; measurementText: string }[] = [];

  constructor(private router: Router) {

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

  onSchermbezoekenButtonClicked(): void {
    console.log('Schermbezoeken button pressed');
      this.router.navigate(['/schermbezoeken']);
  }

  onSensorenButtonClicked(): void {
    console.log('Sensoren button pressed');
      this.router.navigate(['/sensoren']);
  }

  onGrenswaardenButtonClicked(): void {
    console.log('Grenswaarden button pressed');
      this.router.navigate(['/grenswaarden']);
  }

  onMetingenButtonClicked(): void {
    console.log('Metingen button pressed');
      this.router.navigate(['/metingen']);
  }

  onQueriesUitvoerenButtonClicked(): void {
    console.log('Queries Uitvoeren button pressed');
      this.router.navigate(['/queries-uitvoeren']);
  }

  // OnClicklisteners for navigating to the various screens

  showPrompt(): void {
    this.displayPrompt = true;
  }

  handleOk(): void {
    console.log('User Input:', this.userInput);
    this.displayPrompt = false;
    this.userInput = '';
  }

  handleCancel(): void {
    console.log('Prompt canceled.');
    this.displayPrompt = false;
    this.userInput = '';
  }

  showPromptDelete(): void {
    this.displayPromptDelete = true;
  }

  handleOkDelete(): void {
    console.log('User Input:', this.userInput);
    this.displayPromptDelete = false;
    this.userInput = '';
  }

  handleCancelDelete(): void {
    console.log('Prompt canceled.');
    this.displayPromptDelete = false;
    this.userInput = '';
  }

}