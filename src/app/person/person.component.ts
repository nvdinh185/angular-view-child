import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name: String;
  @Input() age: Number;
  @Output() removePerson = new EventEmitter<String>();
  @Output() addAgeClick = new EventEmitter();
  
  removeByClick(){
    this.removePerson.emit(this.name);
  }

  addAge(){
    this.addAgeClick.emit(this.name);
  }

  ngOnInit() {
  }
}
