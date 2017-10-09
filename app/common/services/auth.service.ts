import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { BaseUser } from '../models/BaseUser';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BaseAuthService {

    login(user: BaseUser): Observable<any> {
        return of({
            firstName: 'Jana',
            lastName: 'Novakova',
            weight: 53,
            height: 172,
            age: 22,
            bloodType: 'A'
        });
    }

    register(user: any): Observable<any> {
        return null;
    }

    logout(): Observable<any> {
        return of(true);
    }
}
