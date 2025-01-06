type IndicatorColorType = "red" | "green";

export interface MetaDataModelInterface {
  name: string;
  value: number;
  indicator_color: IndicatorColorType;
}

export interface MetingenModelInterface {
  [timestamp: string]: {
    [sensor: string]: MetaDataModelInterface;
  };
}

export class MetaDataModel implements MetaDataModelInterface {
  name: string;
  value: number;
  indicator_color: IndicatorColorType;

  constructor(name: string, value: number, indicator_color: IndicatorColorType) {
    this.name = name;
    this.value = value;
    this.indicator_color = indicator_color;
  }
}

export class MetingenModel implements MetingenModelInterface {
  [timestamp: string]: { [sensor: string]: MetaDataModel };

  constructor(data: MetingenModelInterface) {
    Object.assign(this, data);
  }
}

// Note that indicator_color can only be defined as having a green color or a red color