export interface SensorenModelInterface {
  deveui: string,
  type: string;
  id: number;
  availableTypes: string[];
}

export class SensorenModel {

    public deveui: string
    public type: string;
    public id: number;
    public availableTypes: string[];

    constructor(deveui: string, type: string, id: number, availableTypes: string[]) {

        this.deveui = deveui;
        this.type = type;
        this.id = id;
        this.availableTypes = availableTypes;

    }
  }