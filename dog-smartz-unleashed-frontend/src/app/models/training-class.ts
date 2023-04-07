export class TrainingClass {

    public location?: string;
    public className?: string;
    public classType?: string;
    public firstClassInfo?: string;
    public skipDay?: string;
    public price?: string;
    public instructorName?: string;

    private _startDateAndTime: Date;

    public get startDateAndTime() {
        return this._startDateAndTime;
    }

    public set startDateAndTime(startDateAndTime: Date) {
        this._startDateAndTime = startDateAndTime;
        console.log(startDateAndTime);
    }

    constructor() {
        this._startDateAndTime = new Date();
    }
}
