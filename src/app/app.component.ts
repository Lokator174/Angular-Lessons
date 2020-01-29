import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  head = [['Номер','id']/* ,['ФИО','name'] */,['Имя','fName'],['Фамилия','lName'],['Отчество','middleName']];
  people = [
    {id:'1', fName:'Даниил', lName:'Юрин', middleName:'Андреевич'},
    {id:'2', fName:'Александр', lName:'Олейников', middleName:'Витальевич'},
    {id:'3', fName:'Сергей', lName:'Булыгин', middleName:'Евгеньевич'}
  ];
}
