export class Goal {

    type: 'weight' | 'steps' | 'distance';

    value: any;

    constructor(options: Goal = <Goal>{}) {
        this.type = options.type;
        this.value = options.value;
    }

}
