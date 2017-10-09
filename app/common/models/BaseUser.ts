export class BaseUser {

    email: string;

    password: string;

    constructor(options: BaseUser = <BaseUser>{}) {
        this.email = options.email;
        this.password = options.password;
    }

}
