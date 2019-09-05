import { Component, ViewChild } from "@angular/core"
import { ChildComponent } from './child.component'
@Component({
    selector: 'app-parrent',
    template: `
        <button (click)="addForChild()">Add for child</button>
        <app-child></app-child>
    `,
})

export class ParrentComponent {
    //Sau khi import ChildComponent vào, khai báo biến myChild có kiểu dữ liệu là ChildComponent
    //tức là biến myChild sẽ có khả năng tham chiếu được đến các thuộc tính và phương thức của ChildComponent
    @ViewChild(ChildComponent)
    myChild: ChildComponent;

    addForChild() {
        this.myChild.value++
    }
}