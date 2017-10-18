import { Component, Input } from '@angular/core';
import { Employee } from './Employee';

@Component({
    selector: 'app-employee',
    templateUrl: './child.component.html'
})

export class ChildComponent {
    @Input('empApp') empApp: Employee;
    constructor() {
        console.log('child component initiated');
    }
}