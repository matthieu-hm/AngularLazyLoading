import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as faker from 'faker';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.scss']
})
export class ByeComponent implements OnInit {
  list: string[] = [];

  variableFormGroup = this.formBuilder.group({

  });

  formGroup = this.formBuilder.group({
    fixed: [false, ''],
    variable: this.variableFormGroup,
  });

  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(changes => {
      console.log(changes);
    });

    // Generate 10 variable inputs
    for (let i = 0; i < 10; i++) {
      this.addOneVariableInput();
    }
  }

  addOneVariableInput() {
    const formControl = new FormControl();
    const formControlName = faker.random.uuid();

    // Add the form control
    this.variableFormGroup.addControl(formControlName, formControl);

    // Add the item that will generate the input
    this.list.push(formControlName);
  }

}
