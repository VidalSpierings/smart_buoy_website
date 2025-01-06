import { Component, inject } from '@angular/core';
import { SplitListComponent } from '../../children/split-list/split-list.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SchermbezoekenService } from '../../../services/schermbezoeken.service';

@Component({
  selector: 'app-schermbezoeken',
  standalone: true,
  imports: [FormsModule, InputTextModule, NgFor, SplitListComponent],
  templateUrl: './schermbezoeken.component.html',
  styleUrl: './schermbezoeken.component.css'
})
export class SchermbezoekenComponent {

  personName: string = "";

  searchBarText: string = "";

  componentsData: { timestamp: string; screen: string }[] = [];

  schermbezoekenService: SchermbezoekenService = inject(SchermbezoekenService);

  constructor(){

    this.schermbezoekenService.getScreenVisits().then((schermBezoekenModel) => {

      this.personName = schermBezoekenModel.persoon;

      for (let i = 0; i < Object.keys(schermBezoekenModel.metadata).length; i++) {
        this.componentsData.push({
          timestamp: `${Object.keys(schermBezoekenModel.metadata)[i]}`,
          screen: `${Object.values(schermBezoekenModel.metadata)[i]}`
        });
      }
    }).catch((error) => {

      console.error('Error fetching data:', error);

    });

  }

}
