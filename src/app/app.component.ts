import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  head = [
    [['Номер','id', {rowspan: 2}],['ФИО','name', {colspan: 3}, true]],
    [['Имя','fName'],['Фамилия','lName'],['Отчество','middleName']]];
  people = [
    {id:'1', fName:'Даниил', lName:'Юрин', middleName:'Андреевич'},
    {id:'2', fName:'Александр', lName:'Олейников', middleName:'Витальевич'},
    {id:'3', fName:'Сергей', lName:'Булыгин', middleName:'Евгеньевич'}
  ];
  filter = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(10)], (control) => {
      debugger;
      return control.value.indexOf('Вася') === - 1 ? {isvasya: false} : null;
    })
  });
  onFilter() {
    const filter = this.filter.getRawValue();
    const = filtered = this.people.filter(({ fName }) => fName.includes(filter.user));
  }
}
