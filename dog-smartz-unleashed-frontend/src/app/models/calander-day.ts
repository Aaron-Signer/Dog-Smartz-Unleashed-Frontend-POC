export class CalanderDay {

    date: Date;
    events?: any [];

    constructor(date?: Date) {
        this.date = date ? date : new Date();
    }
}
