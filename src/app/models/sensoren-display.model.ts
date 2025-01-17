export interface SensorenDisplayModelInterface {
    deveui: string,
    type: string;
    id: number;
    availableTypes: object[];
  }
  
  export class SensorenDisplayModel {
  
      public deveui: string
      public type: {};
      public id: number;
      public availableTypes: object[];
  
      constructor(deveui: string, type: string, id: number, availableTypes: object[]) {
  
          this.deveui = deveui;
          this.type = type;
          this.id = id;
          this.availableTypes = availableTypes;
  
      }
    }