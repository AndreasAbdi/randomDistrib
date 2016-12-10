import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';
import Probability from '../data-type/probability';

@Component({
    selector: 'jumbotron-view',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.css'],
    animations: [
        trigger('resultState', [
            state('active', style({
                opacity: 1,
                display: 'block'
            })),
            state('inactive', style({
                opacity: 0,
                display: 'none'
            })),
            transition('inactive => active', animate(2500, keyframes([
                style({ height: '0', opacity: 0, offset: 0 }),
                style({ height: '0', opacity: 0, offset: 0.8 }),
                style({ height: 'inherit', opacity: 0, offset: 0.85 }),
                style({ height: 'inherit', opacity: 1, offset: 1 })
            ]))),
        ]),
        trigger('coinState', [
            state('active', style({
            })),
            state('inactive', style({
                transform: 'rotateX(360deg)',
                opacity: 0,
                display: 'none'
            })),
            transition('active => inactive', animate(2000, keyframes([
                style({ opacity: 1, transform: 'rotateX(180deg)', offset: 0 }),
                style({ transform: 'rotateX(0deg)', offset: 0.2 }),
                style({ transform: 'rotateX(180deg)', offset: 0.3 }),
                style({ transform: 'rotateX(0deg)', offset: 0.35 }),
                style({ transform: 'rotateX(180deg)', offset: 0.4 }),
                style({ transform: 'rotateX(0deg)', offset: 0.45 }),
                style({ transform: 'rotateX(180deg)', offset: 0.5 }),
                style({ transform: 'rotateX(0deg)', offset: 0.6 }),
                style({ opacity: 1, offset: 0.75 }),
                style({ height: '40vh', opacity: 0, offset: 0.8 }),
                style({ height: '10vh', offset: 0.9 }),
                style({ height: '0', offset: 1.0 })
            ]))),
        ])
    ]
})
export class JumbotronComponent implements OnInit {
    isFlipped: String = 'active';
    resultState: String = 'inactive';
    result: Probability;
    constructor(private socketService: SocketService) { }

    ngOnInit() {
        this.socketService.distributionResultObservable.subscribe(
            (probability) => {
                this.result = probability;
                if(this.resultState === 'inactive') {
                    this.toggle();
                }
            }
        );
    }

    private toggleObject(state: String): String {
        return state === 'active' ? 'inactive' : 'active';
    }


    private toggleStates() {
        this.isFlipped = this.toggleObject(this.isFlipped);
        this.resultState = this.toggleObject(this.resultState);
    }

    toggle() {
        this.toggleStates();
    };
}