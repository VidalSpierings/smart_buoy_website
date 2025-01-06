import { Injectable } from '@angular/core';
import { BorderValues, GrenswaardenModel, GrenswaardenModelInterface } from '../models/grenswaarden.model';

@Injectable({
  providedIn: 'root'
})
export class GrenswaardenService {

  constructor() { }

    async getBorderValuesData(): Promise<GrenswaardenModel> {
  
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

        const borderValues: BorderValues = {
          ph: {
            id: 1,
            name: 'pH Sensor',
            slechtonder: 3,
            goedonder: 7,
            goedboven: 8,
            slechtboven: 10
          },
          egv: {
            id: 2,
            name: 'EGV Sensor',
            slechtonder: 0.1,
            goedonder: 0.5,
            goedboven: 1.0,
            slechtboven: 1.5
          },
          oxygen: {
            id: 3,
            name: 'Oxygen Sensor',
            slechtonder: 2,
            goedonder: 5,
            goedboven: 8,
            slechtboven: 12
          },
          temperature: {
            id: 4,
            name: 'Temperature Sensor',
            slechtonder: -10,
            goedonder: 20,
            goedboven: 25,
            slechtboven: 35
          },
          turbidity: {
            id: 5,
            name: 'Turbidity Sensor',
            slechtonder: 0,
            goedonder: 10,
            goedboven: 20,
            slechtboven: 50
          }
        };
  
        const dummyModelObject: GrenswaardenModelInterface = {
          
          deveui: "70-B3-D5-7E-D0-06-AF-F0",
          name: "1",
          locationName: "Jan's boerderij",
          plaatsingsdatum: "0-0-0000",
          borderValues: borderValues

      };
    
        return dummyModelObject;
  
      //return dashboardModel;
  
      /*
    
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
  
      */
  
    }

}
