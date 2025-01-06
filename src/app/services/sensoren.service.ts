import { Injectable } from '@angular/core';
import { SensorenModel, SensorenModelInterface } from '../models/sensoren.model';

@Injectable({
  providedIn: 'root'
})

export class SensorenService {

  constructor() { }

  async getSensorTypes(): Promise<SensorenModel> {

    const dummyModelObject: SensorenModelInterface = {
            deveui: "70-B3-D5-7E-D0-06-AF-F0",
            type: "egv",
            id: 1,
            availableTypes: [
              "pH",
              "EGV",
              "Oxygen",
              "Temperature",
              "Turbidity"
            ]
        };

        return dummyModelObject

  }
}
