import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

enum RoleId {
  blar = 1,
  thingo = 2
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  roleFormGroup: FormGroup;
  config = [{ min: 1, max: 10 }, { min: 2, max: 20 }];
  i = 0;
  constructor() { }

  ngOnInit() {
    this.roleFormGroup = new FormGroup({ roleId: new FormControl('1'), percentage: new FormControl('') });
  }

  onPercentageBlur(formGroup: FormGroup): void {
    console.log('formGroup values;', formGroup);
    const min = this.getMin(formGroup.controls.roleId.value);
    const max = this.getMax(formGroup.controls.roleId.value);
    const percentage = formGroup.controls.percentage.value;
    console.log('onPercentageBlur: value', percentage);
    let result: number = percentage;
    if (percentage < min) {
      result = min;
    } else if (percentage > max) {
      result = max;
    }
    if (result !== percentage) {
      alert(
        `Percentage for ${formGroup.controls.roleId.value} must fall between ${min} and ${max}.`
      );
    }
    //formGroup.controls.percentage.setValue(result);
  }

  getMin(roleId: RoleId) {
    if (roleId) {
      return this.config[roleId].min;
    }
  }

  getMax(roleId: RoleId) {
    if (roleId) {
      return this.config[roleId].max;
    }
  }
}
