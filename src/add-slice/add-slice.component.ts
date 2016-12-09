import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket-service/socket.service';
import Probability from '../data-type/probability';

@Component({
    selector: 'add-slice',
    templateUrl: './add-slice.component.html'
})
export class AddSliceComponent implements OnInit {
    constructor(private socketService: SocketService) { }

    ngOnInit() { }

        addSlice(name: string, weight: string): void {
        if (name && weight) {
            let intWeight = parseInt(weight, 10);
            if (intWeight > 0 && intWeight <= 100) {
                this.socketService.addSlice(new Probability(name, intWeight));
            }
        }
    }
}