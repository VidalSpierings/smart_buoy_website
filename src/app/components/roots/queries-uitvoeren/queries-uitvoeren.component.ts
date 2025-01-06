import { Component, inject } from '@angular/core';
import { QueriesUitvoerenService } from '../../../services/queries-uitvoeren.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgFor } from '@angular/common';
import { SplitListComponent } from '../../children/split-list/split-list.component';

@Component({
  selector: 'app-queries-uitvoeren',
  standalone: true,
  imports: [FormsModule, InputTextModule, NgFor, SplitListComponent],
  templateUrl: './queries-uitvoeren.component.html',
  styleUrl: './queries-uitvoeren.component.css'
})
export class QueriesUitvoerenComponent {

  personName: string = "";
  
    searchBarText: string = "";
  
    componentsData: { timestamp: string; query: string }[] = [];
  
    queriesUitvoerenService: QueriesUitvoerenService = inject(QueriesUitvoerenService);
  
    constructor(){
  
      this.queriesUitvoerenService.getQueries().then((queriesUitvoerenModel) => {
  
        this.personName = queriesUitvoerenModel.persoon;
  
        for (let i = 0; i < Object.keys(queriesUitvoerenModel.metadata).length; i++) {
          this.componentsData.push({
            timestamp: `${Object.keys(queriesUitvoerenModel.metadata)[i]}`,
            query: `${Object.values(queriesUitvoerenModel.metadata)[i]}`
          });
        }
      }).catch((error) => {
  
        console.error('Error fetching data:', error);
  
      });
  
    }

}
