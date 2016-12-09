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

    private distributionResultSource = new Subject<Probability>();
    private distributionListSource = new Subject<Probability[]>();
    distributionListObservable = this.distributionListSource.asObservable();
    distributionResultObservable = this.distributionResultSource.asObservable();

    private roomListSource = new Subject<string[]>();
    private currentRoomSource = new Subject<string>();
    currentRoomObservable = this.currentRoomSource.asObservable();
    roomListObservable = this.roomListSource.asObservable();

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

    list(): void {
        this.socket.emit('list');
    }

    decide(probabilities: Probability[]): void {
        this.socket.emit('decide', probabilities);
    }

    listRooms(): void {
        this.socket.emit('list-room');
    }

    joinRoom(roomName: string): void {
        this.socket.emit('join-room', roomName);
        this.list();
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
        this.attachListeners();
        this.updateData();
    }

    private attachListeners(): void {
        this.attachListListener();
        this.attachDecisionListener();
        this.attachCurrentRoomListener();
        this.attachRoomListListener();
    }

    private updateData(): void {
        this.list();
        this.listRooms();
        this.joinRoom('default');
    }

    private attachRoomListListener(): void {
        this.socket.on('list-room', (roomNames) => {
            this.roomListSource.next(roomNames);
        });
    }


    private attachCurrentRoomListener(): void {
        this.socket.on('update-room', (roomName) => {
            this.currentRoomSource.next(roomName);
        });
    }

    private attachListListener(): void {
        this.socket.on('list', (distribution) => {
            this.distributionListSource.next(distribution);
        });
    }

    private attachDecisionListener(): void {
        this.socket.on('decision', (probability) => {
            this.distributionResultSource.next(probability);
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