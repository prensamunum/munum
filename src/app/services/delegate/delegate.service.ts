import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DelegateService {

    constructor(public http: Http) {
    }

    getDelegates() {
        return this.http.get('/delegate')
            .map(res => res.json())
            .catch(this._errorHandler);
    }

    addDelegate(delegate) {
        return this.http.post('/delegate', delegate)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    deleteDelegate(id) {
        return this.http.delete('/delegate/' + id)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    updateDelegate(delegate) {
        return this.http.put('/delegate/' + delegate._id, delegate)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    findOneDelegate(id) {
        console.log('findOne');
        return this.http.post('/oneDelegate', id)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    getCountries() {
        return this.http.get('/../../assets/json/countries.json')
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    delegatesByComittee(committee) {
        return this.http.post('/delegatesByComittee', committee)
            .map(res => res.json())
            .catch(this._errorHandler);
    }

    _errorHandler(err: Response) {
        return Observable.throw(err);
        // return Observable.throw(err.json() || 'Server error');
    }

}
