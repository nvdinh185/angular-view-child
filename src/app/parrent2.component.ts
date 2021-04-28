import { Component } from "@angular/core"
@Component({
    selector: 'app-parrent2',
    template: `
        <button (click)="myChild.value=myChild.value+1">Add for child</button>
        <app-child #myChild></app-child>
    `,
})

export class Parrent2Component { }