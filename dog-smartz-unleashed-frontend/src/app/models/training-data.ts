import { TrainingClass } from "./training-class";

export class TrainingData {

    private _data: TrainingClass [];

    public get data() {
        return this._data;
    }

    public set data(data: TrainingClass []) {
        this._data = data;
    }

    constructor() {
        this._data = [];
    }
}
