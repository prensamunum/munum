import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DelegationService {

    constructor(public http: Http) {
    }

    getDelegations() {
        return this.http.get('/delegation')
            .map(res => res.json())
            .catch(this._errorHandler);
    }

    addDelegation(delegation) {
        return this.http.post('/delegation', delegation)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    deleteDelegation(delegationId) {
        return this.http.delete('/delegation/' + delegationId)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    updateDelegation(delegation) {
        return this.http.put('/delegation/' + delegation._id, delegation)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    findOneDelegation(id) {
        return this.http.post('/oneDelegation', id)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    findDelegationCode(code) {
        return this.http.post('/delegationCode', code)
            .map(res => res.json())
            .catch(this._errorHandler);
    }
    delegateByDelegation(delegation) {
        return this.http.post('/delegateByDelegation', delegation)
            .map(res => res.json())
            .catch(this._errorHandler);
    }

    _errorHandler(err: Response) {
        return Observable.throw(err);
    }

}
