import { Injectable } from '@angular/core';
import { DashboardModel, DashboardModelInterface, HistoricalMeasurements } from '../models/dashboard.model'; // Ensure this path matches your project structure

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor() { }

  async getBuoyData(): Promise<DashboardModel> {

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

      const dummyModelObject: DashboardModelInterface = {
        deveui: "70-B3-D5-7E-D0-06-AF-F0",
        waarde: {
            '🧬': 7.0,
            '⚡️': 1.2,
            '💨': 8.5,
            '🌡️': 22.4,
            '🧪': 3.1
        },
        tijdstempel: new Date()
    };

    const historicalData: HistoricalMeasurements = {
      ph: [
      { "timestamp": "2024-12-15T00:00:00Z", "value": 10.5 },
      { "timestamp": "2024-12-15T00:30:00Z", "value": 11.0 },
      { "timestamp": "2024-12-15T01:00:00Z", "value": 10.8 }
    ],
    egv: [
      { "timestamp": "2024-12-15T00:00:00Z", "value": 20.1 },
      { "timestamp": "2024-12-15T00:30:00Z", "value": 20.3 },
      { "timestamp": "2024-12-15T01:00:00Z", "value": 20.2 }
    ],
    oxygen: [
      { "timestamp": "2024-12-15T00:00:00Z", "value": 15.6 },
      { "timestamp": "2024-12-15T00:30:00Z", "value": 15.9 },
      { "timestamp": "2024-12-15T01:00:00Z", "value": 16.0 }
    ],
    temperature: [
      { "timestamp": "2024-12-15T00:00:00Z", "value": 7.5 },
      { "timestamp": "2024-12-15T00:30:00Z", "value": 5.4 },
      { "timestamp": "2024-12-15T01:00:00Z", "value": 12.2 }
    ],
    turbidity: [
      { "timestamp": "2024-12-15T00:00:00Z", "value": 25.1 },
      { "timestamp": "2024-12-15T00:30:00Z", "value": 26.3 },
      { "timestamp": "2024-12-15T01:00:00Z", "value": 28.2 }
    ]
    };

      const dashboardModel: DashboardModel = 
      new DashboardModel(
        dummyModelObject.deveui,
        dummyModelObject.waarde,
        historicalData,
        dummyModelObject.tijdstempel
      );
  
      return dashboardModel;

    //return dashboardModel;

    /*
  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }

    */

  }

  createBuoy() {

    // business-logic for creating a new buoy

  }

  updateBuoy() {

    // business-logic for creating a new buoy

  }

  deleteBuoy() {

    // business-logic for creating a new buoy

  }


}
