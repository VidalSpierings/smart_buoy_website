import { Injectable } from '@angular/core';
import { MetingenModel, MetingenModelInterface } from '../models/metingen.model';

@Injectable({
  providedIn: 'root'
})
export class MetingenService {

  listItemsData: { measurementTypeEmojiText: string; measurementText: string }[] = [];

  constructor() { }

  async getMeasurementsForTimestamps(): Promise<MetingenModel> {

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

    const metingenModel: MetingenModelInterface = {
      "2024-12-15T00:00:00Z": {
        pH: {
          name: "🧬",
          value: 10.5,
          indicator_color: "red"
        },
        oxygen: {
          name: "💨",
          value: 95,
          indicator_color: "green"
        },
        egv: {
          name: "⚡️",
          value: 20.3,
          indicator_color: "green"
        },
        temperature: {
          name: "🌡️",
          value: 30,
          indicator_color: "green"
        },
        turbidity: {
          name: "🧪",
          value: 5.2,
          indicator_color: "red"
        }
      },
      "2024-12-15T00:30:00Z": {
        pH: {
          name: "🧬",
          value: 7.2,
          indicator_color: "green"
        },
        oxygen: {
          name: "💨",
          value: 100,
          indicator_color: "green"
        },
        egv: {
          name: "⚡️",
          value: 18.5,
          indicator_color: "green"
        },
        temperature: {
          name: "🌡️",
          value: 30,
          indicator_color: "green"
        },
        turbidity: {
          name: "🧪",
          value: 4.8,
          indicator_color: "green"
        }
      },
      "2024-12-15T01:00:00Z": {
        pH: {
          name: "🧬",
          value: 6.8,
          indicator_color: "green"
        },
        oxygen: {
          name: "💨",
          value: 98,
          indicator_color: "green"
        },
        egv: {
          name: "⚡️",
          value: 21.0,
          indicator_color: "green"
        },
        temperature: {
          name: "🌡️",
          value: 29.5,
          indicator_color: "green"
        },
        turbidity: {
          name: "🧪",
          value: 5.0,
          indicator_color: "green"
        }
      },
      "2024-12-15T01:30:00Z": {
        pH: {
          name: "🧬",
          value: 7.0,
          indicator_color: "green"
        },
        oxygen: {
          name: "💨",
          value: 99,
          indicator_color: "green"
        },
        egv: {
          name: "⚡️",
          value: 19.0,
          indicator_color: "green"
        },
        temperature: {
          name: "🌡️",
          value: 30.2,
          indicator_color: "green"
        },
        turbidity: {
          name: "🧪",
          value: 4.5,
          indicator_color: "green"
        }
      },
      "2024-12-15T02:00:00Z": {
        pH: {
          name: "🧬",
          value: 6.9,
          indicator_color: "green"
        },
        oxygen: {
          name: "💨",
          value: 96,
          indicator_color: "green"
        },
        egv: {
          name: "⚡️",
          value: 20.5,
          indicator_color: "green"
        },
        temperature: {
          name: "🌡️",
          value: 30.0,
          indicator_color: "green"
        },
        turbidity: {
          name: "🧪",
          value: 5.3,
          indicator_color: "red"
        }
      }
    };

    return metingenModel

  }

  /*
 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

  */

}
