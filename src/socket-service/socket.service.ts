import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as io from 'socket.io-client';

import { Observable } from 'rxjs/Observable';
import '../shared/rxjs-operators';
import  Probability from '../data-type/Probability';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SocketService {
    private serverUrl: string;
    private socket: SocketIOClient.Socket;

    private distributionChangeSource = new Subject<Probability>();
    private distributionListSource = new Subject<Probability[]>();

    distributionListObservable = this.distributionListSource.asObservable();
    distributionChangedObservable = this.distributionChangeSource.asObservable();

    constructor(private http: Http) {
        this.init();
    }

    emitEvent(): void {
        this.socket.emit('chat-message', 'a message');
    }

    addSlice(probability: Probability): void {
        this.socket.emit('add-slice', probability);
    }

    removeSlice(probability: Probability): void {
        this.socket.emit('remove-slice', probability);
    }

    // emit to websocket a list call event.
    list(): void {
        this.socket.emit('list');
    }

    decide(Probability: Probability[]): void {
        this.socket.emit('decide');
    }

    private init(): void {
        this
            .getServer()
            .then(
            serverUrl => {
                this.serverUrl = serverUrl;
                this.initiateSocket();
            }
            );
    }

    private getServer(): Promise<string> {
        return this
            .http
            .get('./assets/server.json')
            .map(this.getDatabase)
            .toPromise()
            .catch(this.handleError);
    }

    private initiateSocket(): void {
        this.socket = io.connect(this.serverUrl);
        this.attachListener();
        this.list();
    }

    private attachListener(): void {
        this.socket.on('list', (a) => {
            this.distributionListSource.next(a);
        });
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