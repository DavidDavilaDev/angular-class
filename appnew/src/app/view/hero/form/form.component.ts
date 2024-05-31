import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { PeriodicElement } from '../../../model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formB: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formB.group({
      position: ["", Validators.required],
      name: ["", Validators.required],
      weight: ["", Validators.required],
      symbol: ["", Validators.required]
    });
  }

  submit() {
    const newElement: PeriodicElement = this.formGroup.value;
    this.userService.addData(newElement);
    this.formGroup.reset();
  }
}
