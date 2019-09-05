import { Component } from "@angular/core"

@Component({
    selector: 'app-parrent',
    template: `
        <h2>{{ value }}</h2>
        <app-child (myClick) = onClickAdd($event)></app-child>
    `,
})

export class ParrentComponent {
    value = 0;

    onClickAdd(isAdd) {
        if (isAdd) {
            this.value++
        } else {
            this.value--
        }
    }
}