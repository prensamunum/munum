import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class StaffService {

    constructor(public http: Http) {
    }
    getStaff() {
        return this.http.get('/staff')
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    loginStaff(staff) {
        return this.http.post('/signin', staff)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    logoutStaff() {
        return this.http.get('/signout')
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    addStaff(staff) {
        return this.http.post('/signup', staff)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    deleteStaff(id) {
        return this.http.delete('/staff/' + id)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    updateStaff(staff) {
        return this.http.put('/staff/' + staff._id, staff)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    findOneStaff(id) {
        return this.http.post('/oneStaff', id)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    staffType() {
        return this.http.get('/type')
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    meStaff() {
        return this.http.get('/me')
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    getCountries() {
        return this.http.get('/../../assets/json/countries.json')
            .map(res => res.json())
            .catch(this._errorHandler);
    }

    _errorHandler(err: Response) {
        return Observable.throw(err);
    }

}
