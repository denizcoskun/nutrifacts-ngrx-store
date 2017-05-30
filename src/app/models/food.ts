export interface Nutrients {
    nutrient_id: string;
    nutrient: string;
    unit: string;
    value: number;
    gm: number;
}
export interface IFood {
    id: string;
    name: string;
    nutrients: Nutrients[];
}

export class Food implements IFood{
    id: string;
    name: string;
    nutrients: Nutrients[];
    constructor(obj?: any) {
        this.id = obj.ndbno || '';
        this.name = obj.name || '';
        this.nutrients = obj.nutrients || [];
    }
}
