import { Injectable } from '@angular/core';
import { BaseAuthService } from '../../common/services/auth.service';
import { BaseUser } from '../../common/models/BaseUser';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService extends BaseAuthService {

    login(user: BaseUser): Observable<any> {
        return of(new User(<User>{
            firstName: 'Sean',
            lastName: 'Perkins',
            weight: 62,
            height: 183,
            age: 22,
            bloodType: 'O-'
        }));
    }


}
