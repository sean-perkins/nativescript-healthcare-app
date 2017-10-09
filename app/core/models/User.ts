import { BaseUser } from '../../common/models/BaseUser';

export class User extends BaseUser {

    firstName: string;

    lastName: string;

    age: number;

    bloodType: string;

    height: number;

    weight: number;

    fatPercentage: number;

    constructor(options: User = <User>{}) {
        super(options);
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.age = options.age;
        this.bloodType = options.bloodType;
        this.height = options.height;
        this.weight = options.weight;
        this.fatPercentage = options.fatPercentage;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`.trim();
    }

    get bmi(): string {
        const height = this.height / 1000;
        return Number((this.weight / height) / (this.height / 10)).toFixed(0);
    }

}
