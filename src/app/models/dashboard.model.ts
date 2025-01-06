export interface HistoricalMeasurement {
  timestamp: string;
  value: number;
}

export class HistoricalMeasurements {
  [key: string]: HistoricalMeasurement[];
}

// above model and interface are fused within the DashboardModel paradigm

export interface DashboardModelInterface {
  deveui: string;
  waarde: object;
  tijdstempel: Date;
}

export class DashboardModel {

    public deveui: string;
    public waarde: object;
    public historischeWaardes: HistoricalMeasurements;
    public tijdstempel: Date;

    /*

   - The "waarde" variable ascertains to a set of retrieved measurement values,
     the exact contents of which depend on the types and amount of measurement 
     instruments attached to the buoy, hence why this variable is of the type "object",
     and not of a more absolutely-defined type

     */
  
    constructor(deveui: string, waarde: object, historischeWaardes: HistoricalMeasurements, tijdstempel: Date) {
      this.deveui = deveui;
      this.waarde = waarde;
      this.historischeWaardes = historischeWaardes
      this.tijdstempel = tijdstempel;
    }
  }