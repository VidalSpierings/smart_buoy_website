import { Injectable } from '@angular/core';
import { SchermBezoekenModel, SchermBezoekenModelInterface } from '../models/schermbezoeken.model'

@Injectable({
  providedIn: 'root'
})

export class SchermbezoekenService {

  constructor() { }

  async getScreenVisits(): Promise<SchermBezoekenModel> {
  
      /*
  
    try {
  
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      
      if (!response.ok) {
  
        throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  
      }
      
      const data = await response.json();
   
      const dashboardModel = new DashboardModel(
        data.deveui,
        data.waarde,
        new Date(data.tijdstempel)
      );
  
      */
  
      const schermBezoekenModel: SchermBezoekenModelInterface = {
      "persoon": "Jan Janssen",
        "metadata": {
        "2024-12-15T00:00:00Z": "Inlogscherm",
        "2024-12-15T00:30:00Z": "Dashboard",
        "2024-12-15T01:00:00Z": "Metingen",
        "2024-12-15T01:30:00Z": "Sensoren",
        "2024-12-15T02:00:00Z": "Schermbezoeken",
    }
      };
  
      return schermBezoekenModel
  
    }

    /*
 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  */

}
