type Metadata = {
    [key: string]: string;
};

export interface SchermBezoekenModelInterface {
    persoon: string;
    metadata: Metadata;
}

export class SchermBezoekenModel {
    persoon: string;
    metadata: Metadata;

    constructor(data: { persoon: string; metadata: Metadata }) {
        this.persoon = data.persoon;
        this.metadata = data.metadata;
    }
}