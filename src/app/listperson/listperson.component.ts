import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.css']
})
export class ListpersonComponent implements OnInit {

  arrPeople = [
    {name: "Định", age: 27},
    {name: "Hoa", age: 21},
    {name: "Quyên", age: 22}
  ];

  ngOnInit() {
  }

  removePersonByName(name: String){
    const index = this.arrPeople.findIndex(e => e.name == name);
    this.arrPeople.splice(index, 1);
  }

  addAge(name: String){
    const index = this.arrPeople.findIndex(e => e.name == name);
    this.arrPeople[index].age++;
  }

}
