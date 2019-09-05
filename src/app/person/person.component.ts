import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  //nhận các tham số truyền vào
  @Input() name: String;
  @Input() age: Number;
  constructor() { }
}
