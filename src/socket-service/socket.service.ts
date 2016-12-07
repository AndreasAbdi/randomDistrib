import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as io from "socket.io-client";

import { Observable } from 'rxjs/Observable';
import '../shared/rxjs-operators';

@Injectable()
export class SocketService {

    constructor(private http: Http) { }

    getData(): Observable<string> {
        return this.http.get('./assets/data.json')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getServer(): Observable<string> {
        return this.http.get('./assets/server.json')
        .map(this.getDatabase)
        .catch(this.handleError);
    }

    private extractData(response: Response) {
        const body = response.text();
        return body || {};
    }

    private getDatabase(response: Response) {
        const body = response.json();
        return body ? body.url : {};
    }
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}