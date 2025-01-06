type Metadata = {
    [key: string]: string;
};

export interface QueriesUitvoerenModelInterface {
    persoon: string;
    metadata: Metadata;
}

export class QueriesUitvoerenModel {
    persoon: string;
    metadata: Metadata;

    constructor(data: { persoon: string; metadata: Metadata }) {
        this.persoon = data.persoon;
        this.metadata = data.metadata;
    }
}