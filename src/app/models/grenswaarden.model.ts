  export interface BorderValuesSet {
    id: number;
    name: string;
    slechtonder: number;
    goedonder: number;
    goedboven: number;
    slechtboven: number;
  }
  
  export class BorderValues {
    [key: string]: BorderValuesSet;
  }
    
  export interface GrenswaardenModelInterface {
    deveui: string;
    name: string;
    locationName: string;
    plaatsingsdatum: string;
    borderValues: BorderValues;
  }
  
  export class GrenswaardenModel {
  
        deveui: string;
        name: string;
        locationName: string;
        plaatsingsdatum: string;
        borderValues: BorderValues;
    
      constructor(deveui: string, name: string, locationName: string, plaatsingsdatum: string, borderValues: BorderValues) {
        this.deveui = deveui;
        this.name = name;
        this.locationName = locationName;
        this.plaatsingsdatum = plaatsingsdatum;
        this.borderValues = borderValues;
      }
    }